import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type CreateOnSubmitEvent = {
  name: string;
  mail: string;
  password: string;
  passwordConfirmation: string;
};

@Component({
  selector: 'view-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @Input()
  name?: string | null;

  @Input()
  mail?: string | null;

  @Input()
  password?: string | null;

  @Input()
  passwordConfirmation?: string | null;

  @Output()
  appSubmit: EventEmitter<CreateOnSubmitEvent>;

  mailDomain: string | undefined;

  isPasswordVisible: boolean = false;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(name: string, mail: string, password: string, passwordConfirmation: string) {
    this.isPasswordVisible = false;
    mail = mail + this.mailDomain;
    console.log(mail);
    if (password !== passwordConfirmation) {
      alert('パスワードが異なります。');
      return;
    }
    this.appSubmit.emit({ name, mail, password, passwordConfirmation });
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    return false;
  }
}
