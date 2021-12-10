import { MaterialModule } from '../material.module';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ContactComponent],
})
export class ContactModule {}
