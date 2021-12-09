import { MaterialModule } from '../../material.module';
import { SignupComponent } from './signup.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [SignupComponent],
})
export class SignupModule {}
