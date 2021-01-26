import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ContactsRoutingModule } from '@app/Features/contacts/contacts-routing.module';
import { ContactsComponent } from '@app/Features/contacts/contacts.component';

@NgModule({
  imports: [CommonModule, TranslateModule, ContactsRoutingModule],
  declarations: [ContactsComponent],
})
export class ContactsModule {}
