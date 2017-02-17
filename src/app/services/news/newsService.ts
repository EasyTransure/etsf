import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService{
  private baseUrl = 'https://elite-schedule-app-i2-91d78.firebaseio.com';
  constructor(private http: Http){}

  getNews(){
    return this.http.get(`${this.baseUrl}/news.json`)
      .map(response => {
        return response.json;
      });
  }
}
