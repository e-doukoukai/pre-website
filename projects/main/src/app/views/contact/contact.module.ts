import { MaterialModule } from '../material.module';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ContactComponent],
})
export class ContactModule {}
