import { MaterialModule } from '../../material.module';
import { ReserveComponent } from './reserve.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReserveComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ReserveComponent],
})
export class ReserveModule {}
