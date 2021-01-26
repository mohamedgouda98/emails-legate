import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { EmailsComponent } from '@app/Features/emails/emails.component';
import { Shell } from '@app/shell/shell.service';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';

// const routes: Routes = [
//   // Module is lazy loaded, see app-routing.module.ts
//   { path: 'emails', component: EmailsComponent, data: { title: marker('emails') } },
// ];

const routes: Routes = [
  Shell.childRoutes([{ path: 'emails', component: EmailsComponent, data: { title: marker('emails') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class EmailsRoutingModule {}
