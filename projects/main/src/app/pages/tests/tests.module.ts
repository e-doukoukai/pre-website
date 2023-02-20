import { Tests2022Module } from '../../views/tests/tests2022/tests2022.module';
import { TestsModule } from '../../views/tests/tests.module';
import { AppTest2022Component } from './tests2022/test2022/test2022.component';
import { AppTests2022Component } from './tests2022/tests2022.component';
import { TestsRoutingModule } from './tests-routing.module';
import { AppTestsComponent } from './tests.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppTestsComponent, AppTests2022Component, AppTest2022Component],
  imports: [CommonModule, TestsRoutingModule, TestsModule, Tests2022Module],
})
export class AppTestsModule {}
