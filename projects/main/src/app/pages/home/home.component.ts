import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { AuthApplicationService } from 'projects/shared/src/lib/services/auth/auth.application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class AppHomeComponent implements OnInit {
  user: User | undefined;

  constructor(private auth: Auth, private authApp: AuthApplicationService) {
    const CurrentUser = this.auth.currentUser;
    if (CurrentUser !== null) {
      this.user = CurrentUser;
    }
  }

  ngOnInit(): void {}

  async onSubmit() {
    this.authApp.signOut();
    location.reload();
  }
}
