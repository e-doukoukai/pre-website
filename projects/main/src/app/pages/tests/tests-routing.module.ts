import { AppTestsComponent } from './tests.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTests2022Component } from './tests2022/tests2022.component';

const routes: Routes = [
  {
    path: '',
    component: AppTestsComponent,
  },
  {
    path: 'tests2022',
    component: AppTests2022Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsRoutingModule {}
