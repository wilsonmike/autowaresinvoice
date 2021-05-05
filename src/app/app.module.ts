import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MarchComponent } from './march/march.component';
import { HttpClientModule } from '@angular/common/http';
import { ShipmentsComponent } from './shipments/shipments.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { ShippedComponent } from './shipped/shipped.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Invoice0408Component } from './invoice0408/invoice0408.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    PagenotfoundComponent,
    MarchComponent,
    ShipmentsComponent,
    InfoComponent,
    ShippedComponent,
    Invoice0408Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
