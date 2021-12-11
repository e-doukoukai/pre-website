import { MaterialModule } from '../../material.module';
import { SigninComponent } from './signin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule],
  exports: [SigninComponent],
})
export class SigninModule {}
