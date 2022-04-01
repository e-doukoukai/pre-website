import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  name?: string | null;

  mail?: string | null;

  password?: string | null;

  passwordConfirmation?: string | null;

  @Output()
  appSubmit: EventEmitter<CreateOnSubmitEvent>;

  isPasswordVisible: boolean = false;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(mail: string, password: string, passwordConfirmation: string) {
    const name = '';
    this.isPasswordVisible = false;
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
