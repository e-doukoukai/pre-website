import { MaterialModule } from '../../material.module';
import { ReportComponent } from './report.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReportComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ReportComponent],
})
export class ReportModule {}
