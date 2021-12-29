import { MaterialModule } from '../../material.module';
import { ScheduleComponent } from './schedule.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ScheduleComponent],
})
export class ScheduleModule {}
