import { ReserveModule } from '../../views/room/reserve/reserve.module';
import { RoomModule } from '../../views/room/room.module';
import { AppReserveComponent } from './reserve/reserve.component';
import { RoomRoutingModule } from './room-routing.module';
import { AppRoomComponent } from './room.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppRoomComponent, AppReserveComponent],
  imports: [CommonModule, RoomRoutingModule, RoomModule, ReserveModule],
})
export class AppRoomModule {}
