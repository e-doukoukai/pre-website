import { MaterialModule } from '../material.module';
import { PrinterComponent } from './printer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PrinterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PrinterComponent],
})
export class PrinterModule {}
