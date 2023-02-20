import { MaterialModule } from '../../material.module';
import { Tests2022Component } from './tests2022.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Tests2022Component],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [Tests2022Component],
})
export class Tests2022Module {}
