import { MaterialModule } from '../material.module';
import { TestsComponent } from './tests.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TestsComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [TestsComponent],
})
export class TestsModule {}
