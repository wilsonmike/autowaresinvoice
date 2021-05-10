import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './info/info.component';
import { Invoice0408Component } from './invoice0408/invoice0408.component';
import { Invoice0409Component } from './invoice0409/invoice0409.component';
import { Invoice0412Component } from './invoice0412/invoice0412.component';
import { Invoice0415Component } from './invoice0415/invoice0415.component';
import { Invoice0417Component } from './invoice0417/invoice0417.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShippedComponent } from './shipped/shipped.component';

const routes: Routes = [
  { path: 'home', component: ShipmentsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'shipped', component: ShippedComponent },
  { path: '0408', component: Invoice0408Component },
  { path: '0409', component: Invoice0409Component },
  { path: '0412', component: Invoice0412Component },
  { path: '0415', component: Invoice0415Component },
  { path: '0417', component: Invoice0417Component },

  { path: '**', component: ShipmentsComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
