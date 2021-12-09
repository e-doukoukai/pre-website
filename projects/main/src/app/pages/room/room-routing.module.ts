import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoomComponent } from './room.component';

const routes: Routes = [
  {
    path:'',
    component:AppRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
