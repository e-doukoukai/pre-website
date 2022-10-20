import { AppHomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.AppHomeModule) },
  {
    path: 'seminar',
    loadChildren: () => import('./pages/seminar/seminar.module').then((m) => m.AppSeminarModule),
  },
  {
    path: 'room',
    loadChildren: () => import('./pages/room/room.module').then((m) => m.AppRoomModule),
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/accounts/accounts.module').then((m) => m.AppAccountsModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.AppContactModule),
  },
  {
    path: 'printer',
    loadChildren: () => import('./pages/printer/printer.module').then((m) => m.AppPrinterModule),
  },
  {
    path: 'tests',
    loadChildren: () => import('./pages/tests/tests.module').then((m) => m.AppTestsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
