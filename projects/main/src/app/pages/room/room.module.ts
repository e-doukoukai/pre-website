import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { AppRoomComponent } from './room.component';
import { RoomModule } from '../../views/room/room.module';


@NgModule({
  declarations: [
    AppRoomComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    RoomModule
  ]
})
export class AppRoomModule { }
