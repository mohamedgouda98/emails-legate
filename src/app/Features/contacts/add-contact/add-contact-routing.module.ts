import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';
import { AddContactComponent } from '@app/Features/contacts/add-contact/add-contact.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'contacts/add', component: AddContactComponent, data: { title: marker('contacts/add') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AddContactRoutingModule {}
