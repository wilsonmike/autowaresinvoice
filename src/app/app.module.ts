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
import { Invoice0409Component } from './invoice0409/invoice0409.component';
import { Invoice0412Component } from './invoice0412/invoice0412.component';
import { Invoice0415Component } from './invoice0415/invoice0415.component';
import { Invoice0417Component } from './invoice0417/invoice0417.component';
import { Invoice0417FilesComponent } from './invoice0417-files/invoice0417-files.component';
import { Invoice0402Component } from './invoice0402/invoice0402.component';
import { Invoice0427Component } from './invoice0427/invoice0427.component';
import { Invoice0505Component } from './invoice0505/invoice0505.component';
import { Invoice0506Component } from './invoice0506/invoice0506.component';
import { Invoice0Component } from './invoice0/invoice0.component';
import { Invoice0513Component } from './invoice0513/invoice0513.component';
import { Invoice0520Component } from './invoice0520/invoice0520.component';
import { Invoice0525Component } from './invoice0525/invoice0525.component';
import { Invoice0605Component } from './invoice0605/invoice0605.component';
import { Invoice0610Component } from './invoice0610/invoice0610.component';
import { Invoice0622Component } from './invoice0622/invoice0622.component';
import { Invoice0630Component } from './invoice0630/invoice0630.component';

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
    Invoice0408Component,
    Invoice0409Component,
    Invoice0412Component,
    Invoice0415Component,
    Invoice0417Component,
    Invoice0417FilesComponent,
    Invoice0402Component,
    Invoice0427Component,
    Invoice0505Component,
    Invoice0506Component,
    Invoice0Component,
    Invoice0513Component,
    Invoice0520Component,
    Invoice0525Component,
    Invoice0605Component,
    Invoice0610Component,
    Invoice0622Component,
    Invoice0630Component
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
