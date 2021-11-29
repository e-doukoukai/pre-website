import { AppHomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.AppHomeModule) },
  { path: 'seminar', loadChildren: () => import('./pages/seminar/seminar.module').then((m) => m.AppSeminarModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
