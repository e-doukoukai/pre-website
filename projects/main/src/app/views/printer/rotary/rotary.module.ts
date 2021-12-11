import { MaterialModule } from '../../material.module';
import { RotaryComponent } from './rotary.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RotaryComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [RotaryComponent],
})
export class RotaryModule {}
