import { TestsModule } from '../../views/tests/tests.module';
import { TestsRoutingModule } from './tests-routing.module';
import { AppTestsComponent } from './tests.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppTestsComponent],
  imports: [CommonModule, TestsRoutingModule, TestsModule],
})
export class AppTestsModule {}
