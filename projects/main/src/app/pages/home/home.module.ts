import { HomeModule } from '../../views/home/home.module';
import { HomeRoutingModule } from './home-routing.module';
import { AppHomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppHomeComponent],
  imports: [CommonModule, HomeRoutingModule, HomeModule],
})
export class AppHomeModule {}
