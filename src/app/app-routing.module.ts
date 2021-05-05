import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './info/info.component';
import { Invoice0408Component } from './invoice0408/invoice0408.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShippedComponent } from './shipped/shipped.component';

const routes: Routes = [
  { path: 'home', component: ShipmentsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'shipped', component: ShippedComponent },
  { path: '0408', component: Invoice0408Component },

  { path: '**', component: ShipmentsComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
