import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';
import { ContactsComponent } from '@app/Features/contacts/contacts.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'contacts', component: ContactsComponent, data: { title: marker('contacts') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ContactsRoutingModule {}
