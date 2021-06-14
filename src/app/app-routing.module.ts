import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './info/info.component';
import { Invoice0Component } from './invoice0/invoice0.component';
import { Invoice0402Component } from './invoice0402/invoice0402.component';
import { Invoice0408Component } from './invoice0408/invoice0408.component';
import { Invoice0409Component } from './invoice0409/invoice0409.component';
import { Invoice0412Component } from './invoice0412/invoice0412.component';
import { Invoice0415Component } from './invoice0415/invoice0415.component';
import { Invoice0417FilesComponent } from './invoice0417-files/invoice0417-files.component';
import { Invoice0417Component } from './invoice0417/invoice0417.component';
import { Invoice0427Component } from './invoice0427/invoice0427.component';
import { Invoice0505Component } from './invoice0505/invoice0505.component';
import { Invoice0506Component } from './invoice0506/invoice0506.component';
import { Invoice0513Component } from './invoice0513/invoice0513.component';
import { Invoice0520Component } from './invoice0520/invoice0520.component';
import { Invoice0525Component } from './invoice0525/invoice0525.component';
import { Invoice0605Component } from './invoice0605/invoice0605.component';
import { Invoice0610Component } from './invoice0610/invoice0610.component';
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
  { path: 'seventeendata', component: Invoice0417FilesComponent },
  { path: '0402', component: Invoice0402Component },
  { path: '0427', component: Invoice0427Component },
  { path: '0505', component: Invoice0505Component },
  { path: '0506', component: Invoice0506Component },
  { path: '0326', component: Invoice0Component },
  { path: '0513', component: Invoice0513Component },
  { path: '0520', component: Invoice0520Component },
  { path: '0525', component: Invoice0525Component },
  { path: '0605', component: Invoice0605Component },
  { path: '0610', component: Invoice0610Component },

  { path: '**', component: ShipmentsComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
