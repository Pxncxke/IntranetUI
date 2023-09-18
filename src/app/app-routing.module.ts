import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { HomeComponent } from './home/home.component';
import { HomeNewsComponent } from './news/home-news/home-news.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'news',
    component: HomeNewsComponent
  },
  {
    path: 'news/add',
    component: AddNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
