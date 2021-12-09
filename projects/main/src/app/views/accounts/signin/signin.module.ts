import { MaterialModule } from '../../material.module';
import { SigninComponent } from './signin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [SigninComponent],
})
export class SigninModule {}
