import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RoomComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports:[RoomComponent],
})
export class RoomModule { }
