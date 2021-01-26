import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AddEmailRoutingModule } from '@app/Features/emails/add-email/add-email-routing.module';
import { AddEmailComponent } from '@app/Features/emails/add-email/add-email.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, AddEmailRoutingModule, FormsModule],
  declarations: [AddEmailComponent],
})
export class AddEmailModule {}
