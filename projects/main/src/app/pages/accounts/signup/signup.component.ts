import { CreateOnSubmitEvent } from '../../../views/accounts/signup/signup.component';
import { Component, OnInit } from '@angular/core';
import { AuthApplicationService } from 'projects/shared/src/lib/services/auth/auth.application.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class AppSignupComponent implements OnInit {
  constructor(private auth: AuthApplicationService) {}

  ngOnInit(): void {}

  async onSubmit($event: CreateOnSubmitEvent) {
    this.auth.signup(
      {
        type: 'email',
        email: $event.mail,
        password: $event.password,
      },
      $event.name,
    );
  }
}
