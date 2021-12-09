import { MaterialModule } from '../../material.module';
import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, MaterialModule, MatChipsModule],
  exports: [AccountComponent],
})
export class AccountModule {}
