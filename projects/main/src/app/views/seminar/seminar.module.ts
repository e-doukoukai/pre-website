import { MaterialModule } from '../material.module';
import { SeminarComponent } from './seminar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SeminarComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [SeminarComponent],
})
export class SeminarModule {}
