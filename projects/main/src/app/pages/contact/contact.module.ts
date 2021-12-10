import { ContactModule } from '../../views/contact/contact.module';
import { ContactRoutingModule } from './contact-routing.module';
import { AppContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppContactComponent],
  imports: [CommonModule, ContactRoutingModule, ContactModule],
})
export class AppContactModule {}
