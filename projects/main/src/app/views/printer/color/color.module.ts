import { MaterialModule } from '../../material.module';
import { ColorComponent } from './color.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ColorComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ColorComponent],
})
export class ColorModule {}
