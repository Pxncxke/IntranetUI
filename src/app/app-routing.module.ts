import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
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
=======
import { AddNewsComponent } from './add-news/add-news.component';

const routes: Routes = [
  {
    path: 'administracion/crearnoticia',
>>>>>>> e7f288eaa79796f41a7fd8557d8ef15c1d7122d4
    component: AddNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
