import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsModel } from '../models/news-home-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getLatestNews(): Observable<NewsModel[]>{
    return this.http.get<NewsModel[]>(`${environment.apiBaseUrl}/api/News/Latest`);
  }
}
