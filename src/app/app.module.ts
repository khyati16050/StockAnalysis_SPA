import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NatwestComponent } from './natwest/natwest.component';
import { KotakComponent } from './kotak/kotak.component';
import { IciciComponent } from './icici/icici.component';
import { NiitComponent } from './niit/niit.component';
import { SbiComponent } from './sbi/sbi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NatwestComponent,
    KotakComponent,
    IciciComponent,
    NiitComponent,
    SbiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
