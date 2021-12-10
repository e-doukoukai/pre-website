import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSeminarComponent } from './seminar.component';

const routes: Routes = [
  {
    path: '',
    component: AppSeminarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeminarRoutingModule { }
