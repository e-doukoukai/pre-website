import { PrinterModule } from '../../views/printer/printer.module';
import { PrinterRoutingModule } from './printer-routing.module';
import { AppPrinterComponent } from './printer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppPrinterComponent],
  imports: [CommonModule, PrinterRoutingModule, PrinterModule],
})
export class AppPrinterModule {}
