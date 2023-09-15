import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { AddNewsComponent } from './news/add-news/add-news.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeNewsComponent } from './news/home-news/home-news.component';


=======
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule } from '@angular/forms';
>>>>>>> e7f288eaa79796f41a7fd8557d8ef15c1d7122d4

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    AddNewsComponent,
    HomeComponent,
    HomeNewsComponent
=======
    AddNewsComponent
>>>>>>> e7f288eaa79796f41a7fd8557d8ef15c1d7122d4
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
