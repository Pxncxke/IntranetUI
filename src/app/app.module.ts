import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeNewsComponent } from './news/home-news/home-news.component';
import { ViewNewsComponent } from './news/view-news/view-news.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddNewsComponent,
    HomeComponent,
    HomeNewsComponent,
    ViewNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
