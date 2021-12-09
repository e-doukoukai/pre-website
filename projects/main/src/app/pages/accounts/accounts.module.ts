import { AccountModule } from '../../views/accounts/account/account.module';
import { AccountsModule } from '../../views/accounts/accounts.module';
import { SigninModule } from '../../views/accounts/signin/signin.module';
import { SignupModule } from '../../views/accounts/signup/signup.module';
import { AppAccountComponent } from './account/account.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AppAccountsComponent } from './accounts.component';
import { AppSigninComponent } from './signin/signin.component';
import { AppSignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppAccountsComponent, AppSignupComponent, AppSigninComponent, AppAccountComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AccountsModule,
    AccountModule,
    SignupModule,
    SigninModule,
  ],
})
export class AppAccountsModule {}
