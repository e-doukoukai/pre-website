import { ReserveModule } from '../../views/room/reserve/reserve.module';
import { RoomModule } from '../../views/room/room.module';
import { ScheduleModule } from '../../views/room/schedule/schedule.module';
import { AppReserveComponent } from './reserve/reserve.component';
import { RoomRoutingModule } from './room-routing.module';
import { AppRoomComponent } from './room.component';
import { AppScheduleComponent } from './schedule/schedule.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppRoomComponent, AppReserveComponent, AppScheduleComponent],
  imports: [CommonModule, RoomRoutingModule, RoomModule, ReserveModule, ScheduleModule],
})
export class AppRoomModule {}
