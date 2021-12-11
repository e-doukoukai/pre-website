import { AppColorComponent } from './color/color.component';
import { AppMonochromeComponent } from './monochrome/monochrome.component';
import { AppPrinterComponent } from './printer.component';
import { AppReportComponent } from './report/report.component';
import { AppRotaryComponent } from './rotary/rotary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppPrinterComponent,
  },
  {
    path: 'color',
    component: AppColorComponent,
  },
  {
    path: 'monochrome',
    component: AppMonochromeComponent,
  },
  {
    path: 'report',
    component: AppReportComponent,
  },
  {
    path: 'rotary',
    component: AppRotaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrinterRoutingModule {}
