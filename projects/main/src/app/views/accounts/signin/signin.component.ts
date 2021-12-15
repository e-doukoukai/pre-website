import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export type EnterOnSubmitEvent = {
  mail: string;
  password: string;
};

@Component({
  selector: 'view-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  mail?: string | null;

  password?: string | null;

  @Output()
  appSubmit: EventEmitter<EnterOnSubmitEvent>;

  mailDomain: string | undefined;

  isPasswordVisible: boolean = false;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(mail: string, password: string) {
    mail = mail + this.mailDomain;
    this.isPasswordVisible = false;
    this.appSubmit.emit({ mail, password });
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    return false;
  }
}
