import { Injectable } from '@angular/core';
import { Firestore, collection, collectionGroup, query, QueryConstraint, doc, getDoc, docData, getDocs, collectionData, setDoc, serverTimestamp, DocumentReference, Query } from '@angular/fire/firestore';
import { IAccountInfrastructureService } from './account.service';
import { Account } from '@local/common';
import { AccountFirestore } from '@local/common';

@Injectable({
  providedIn: 'root',
})
export class AccountInfrastructureService
  implements IAccountInfrastructureService {

  constructor(private readonly firestore: Firestore) {}

  collection(...queryConstraints: QueryConstraint[]): Query<Account> {
    const ref = collection(this.firestore, AccountFirestore.collectionPath());

    return (queryConstraints.length > 0
      ? query(ref, ...queryConstraints) : ref).withConverter(AccountFirestore.converter) as Query<Account>;
  }

  collectionGroup(...queryConstraints: QueryConstraint[]):Query<Account> {
    const ref = collectionGroup(this.firestore, AccountFirestore.collectionID);

    return (queryConstraints.length > 0
      ? query(ref, ...queryConstraints) : ref).withConverter(AccountFirestore.converter)as Query<Account>;
  }

  document(id?: string):DocumentReference<Account> {
    const ref = collection(this.firestore, AccountFirestore.collectionPath());

    return (id ? doc(this.firestore, ref.path, id) : doc(this.firestore, ref.path)).withConverter(AccountFirestore.converter) as DocumentReference<Account>;
  }

  get(id: string) {
    return getDoc(this.document(id))
      .then(snapshot => snapshot.data());
  }

  get$(id: string) {
    return docData(this.document(id));
  }

  list() {
    return getDocs(this.collection())
      .then(snapshots => snapshots.docs.map(doc => doc.data()))
  }

  list$() {
    return collectionData(this.collection());
  }

  listGroup() {
    return getDocs(this.collectionGroup())
      .then(snapshots => snapshots.docs.map(doc => doc.data()))
  }

  listGroup$() {
    return collectionData(this.collectionGroup());
  }

  create(data: Account) {
    const doc = this.document();
    data.id = doc.id;

    const now = serverTimestamp();
    data.created_at = now;
    data.updated_at = now;

    return setDoc(doc, data);
  }
}
