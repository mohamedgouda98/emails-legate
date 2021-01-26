import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AddContactComponent } from '@app/Features/contacts/add-contact/add-contact.component';
import { AddContactRoutingModule } from '@app/Features/contacts/add-contact/add-contact-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, AddContactRoutingModule, FormsModule],
  declarations: [AddContactComponent],
})
export class AddContactModule {}
