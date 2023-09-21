import { Component, OnInit } from '@angular/core';
import { NewsModel } from './models/news-home-model';
import { HomeService } from './services/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsCard$?: Observable<NewsModel[]>;

/**
 *
 */
constructor(private homeService: HomeService) {

}

  ngOnInit(): void {
    this.newsCard$ = this.homeService.getLatestNews();
  }


  onHomeLoad(){

  }

}
