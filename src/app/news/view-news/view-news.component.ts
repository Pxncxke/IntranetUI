import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsModel } from '../models/news-request-model';
import { Observable, Subscription } from 'rxjs';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit, OnDestroy{

  newsviews$?: Observable<NewsModel>;

  paramsSubscription?: Subscription;

  newsid: string | null = null;
  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) =>{
        this.newsid = params.get('id');

        if(this.newsid){
          this.newsviews$ = this.newsService.getNewsWithAuthor(this.newsid);
        }
      }
    })

  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }


}
