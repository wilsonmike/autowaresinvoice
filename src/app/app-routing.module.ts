import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './info/info.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShippedComponent } from './shipped/shipped.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';

const routes: Routes = [
  { path: 'home', component: ShipmentsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'spreadsheet', component: SpreadsheetComponent },
  { path: 'shipped', component: ShippedComponent },
  { path: '**', component: ShipmentsComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
