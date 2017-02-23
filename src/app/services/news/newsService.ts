import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { News } from '../../model/_model';

@Injectable()
export class NewsService {
  private baseUrl = 'http://localhost/web/news-service/';
  private headers: Headers;
  constructor(private http: Http) {
  this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  getNews(): Observable<News[]> {
    return this.http.get(this.baseUrl + 'news')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getANews(id_news: number): Observable<News> {
    return this.http.get(this.baseUrl + 'news/' + id_news)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addNews(news: News): Observable<News> {
    return this.http.post(this.baseUrl + 'news', JSON.stringify(news), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateNews(id_news: number, news: News): Observable<News> {
    return this.http.put(this.baseUrl + id_news, JSON.stringify(news), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteNews(id_news: number): Observable<Response> {
    return this.http.delete(this.baseUrl + id_news)
      .catch(this.handleError);
  }

  private extractData(res: Response): any {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}