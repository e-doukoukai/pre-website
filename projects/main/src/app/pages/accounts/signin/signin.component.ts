import { EnterOnSubmitEvent } from '../../../views/accounts/signin/signin.component';
import { Component, OnInit } from '@angular/core';
import { AuthApplicationService } from 'projects/shared/src/lib/services/auth/auth.application.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class AppSigninComponent implements OnInit {
  constructor(private auth: AuthApplicationService) {}

  ngOnInit(): void {}

  async onSubmit($event: EnterOnSubmitEvent) {
    this.auth.signin({
      type: 'email',
      email: $event.mail,
      password: $event.password,
    });
  }
}
