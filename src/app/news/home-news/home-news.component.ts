import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Observable } from 'rxjs';
import { NewsModel } from '../models/news-request-model';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {

  newsAll$?: Observable<NewsModel[]>;
/**
 *
 */
constructor(private newsService: NewsService) {


}

  ngOnInit(): void {
    this.newsAll$ = this.newsService.getAllNews();
  }




}
