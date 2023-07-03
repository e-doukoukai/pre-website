import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tests2022Component } from './tests2022.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    Tests2022Component
  ],
  imports: [
    CommonModule, RouterModule, MaterialModule
  ],
  exports:[Tests2022Component]
})
export class Tests2022Module { }
