import { AppReserveComponent } from './reserve/reserve.component';
import { AppRoomComponent } from './room.component';
import { AppScheduleComponent } from './schedule/schedule.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppRoomComponent,
  },
  {
    path: 'reserve',
    component: AppReserveComponent,
  },
  {
    path: 'schedule',
    component: AppScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
