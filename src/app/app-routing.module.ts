import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './info/info.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShipmentsComponent } from './shipments/shipments.component';

const routes: Routes = [
  { path: '', component: ShipmentsComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', component: ShipmentsComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
