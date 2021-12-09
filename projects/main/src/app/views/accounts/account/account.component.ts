import { Component, Input, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'view-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input()
  user?: User | null;

  constructor() {}

  ngOnInit(): void {}
}
