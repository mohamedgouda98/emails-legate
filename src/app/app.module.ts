import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmailComponent } from './Features/emails/add-email/add-email.component';
import { UpdateEmailComponent } from './Features/emails/update-email/update-email.component';
import { ContactsComponent } from './Features/contacts/contacts.component';
import { AddContactComponent } from './Features/contacts/add-contact/add-contact.component';
import { UpdateContactComponent } from './Features/contacts/update-contact/update-contact.component';
import { EmailsModule } from '@app/Features/emails/emails.module';
import { AddEmailModule } from '@app/Features/emails/add-email/add-email.module';
import { ContactsModule } from '@app/Features/contacts/contacts.module';
import { AddContactModule } from '@app/Features/contacts/add-contact/add-contact.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    EmailsModule,
    AddEmailModule,
    AddContactModule,
    ContactsModule,
    HttpClientModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, UpdateEmailComponent, UpdateContactComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
