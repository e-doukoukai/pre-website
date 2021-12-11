import { MaterialModule } from '../../material.module';
import { MonochromeComponent } from './monochrome.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MonochromeComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [MonochromeComponent],
})
export class MonochromeModule {}
