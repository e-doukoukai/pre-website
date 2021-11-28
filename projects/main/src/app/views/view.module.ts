import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [AppComponent],
})
export class ViewModule {}
