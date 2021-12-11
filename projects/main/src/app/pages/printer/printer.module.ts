import { ColorModule } from '../../views/printer/color/color.module';
import { MonochromeModule } from '../../views/printer/monochrome/monochrome.module';
import { PrinterModule } from '../../views/printer/printer.module';
import { ReportModule } from '../../views/printer/report/report.module';
import { RotaryModule } from '../../views/printer/rotary/rotary.module';
import { AppColorComponent } from './color/color.component';
import { AppMonochromeComponent } from './monochrome/monochrome.component';
import { PrinterRoutingModule } from './printer-routing.module';
import { AppPrinterComponent } from './printer.component';
import { AppReportComponent } from './report/report.component';
import { AppRotaryComponent } from './rotary/rotary.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppPrinterComponent,
    AppRotaryComponent,
    AppReportComponent,
    AppMonochromeComponent,
    AppColorComponent,
  ],
  imports: [
    CommonModule,
    PrinterRoutingModule,
    PrinterModule,
    ColorModule,
    MonochromeModule,
    ReportModule,
    RotaryModule,
  ],
})
export class AppPrinterModule {}
