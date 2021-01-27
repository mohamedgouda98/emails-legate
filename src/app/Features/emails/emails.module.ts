import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EmailsRoutingModule } from '@app/Features/emails/emails-routing.module';
import { EmailsComponent } from '@app/Features/emails/emails.component';
import { highlightDirective } from '@app/Directives/Highlight.directive';

@NgModule({
  imports: [CommonModule, TranslateModule, EmailsRoutingModule],
  declarations: [EmailsComponent, highlightDirective],
})
export class EmailsModule {}
