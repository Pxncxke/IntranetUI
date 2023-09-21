import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsModel } from 'src/app/home/models/news-home-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsWithAuthor(id: string): Observable<NewsModel>{
    return this.http.get<NewsModel>(`${environment.apiBaseUrl}/api/News/AuthorDetails/${id}`);
  }

  getAllNews(): Observable<NewsModel[]>{
    return this.http.get<NewsModel[]>(`${environment.apiBaseUrl}/api/News`);
  }
}
