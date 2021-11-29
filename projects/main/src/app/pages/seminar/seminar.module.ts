import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeminarRoutingModule } from './seminar-routing.module';
import { AppSeminarComponent } from './seminar.component';
import { SeminarModule } from '../../views/seminar/seminar.module';


@NgModule({
  declarations: [
    AppSeminarComponent
  ],
  imports: [
    CommonModule,
    SeminarRoutingModule,
    SeminarModule
  ]
})
export class AppSeminarModule { }
