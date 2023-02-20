import { Test2022Component } from './test2022.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [Test2022Component],
  imports: [CommonModule],
  exports: [Test2022Module],
})
export class Test2022Module {}
