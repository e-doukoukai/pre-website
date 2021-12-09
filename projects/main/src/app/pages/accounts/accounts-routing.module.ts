import { AuthGuard } from '../../guard/auth.guard';
import { AppAccountComponent } from './account/account.component';
import { AppAccountsComponent } from './accounts.component';
import { AppSigninComponent } from './signin/signin.component';
import { AppSignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppAccountsComponent,
  },
  {
    path: 'account',
    component: AppAccountComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: AppSignupComponent,
  },
  {
    path: 'signin',
    component: AppSigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
