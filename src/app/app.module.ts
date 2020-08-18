import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
