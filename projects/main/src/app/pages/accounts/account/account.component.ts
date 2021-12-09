import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AppAccountComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute, private auth: Auth) {
    const CurrentUser = this.auth.currentUser;
    if (CurrentUser !== null) {
      this.user = CurrentUser;
    }
  }
  ngOnInit(): void {}
}
