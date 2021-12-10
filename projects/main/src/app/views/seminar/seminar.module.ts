import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeminarComponent } from './seminar.component';

@NgModule({
  declarations: [
    SeminarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SeminarComponent
  ]
})
export class SeminarModule { }
