import { Component, OnInit } from '@angular/core';
import { NewsModel } from './models/news-home-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsCard?: NewsModel;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
