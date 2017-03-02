import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { News, Follow } from '../../model/_model';
import { ServiceBase } from '../serviceBase/serviceBase'

@Injectable()
export class NewsService extends ServiceBase{
  private baseUrl = 'http://localhost/web/news-service/';
  private headers: Headers;

  constructor(private http: Http) {
    super();
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  getNews(): Observable<News[]> {
    return this.http.get(this.baseUrl + 'news')
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  getFollowedNews(id_user: number): Observable<News[]> {
    return this.http.get(this.baseUrl + 'news/follow/' + id_user)
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  getMyNews(id_user: number): Observable<News[]> {
    return this.http.get(this.baseUrl + 'news/' + id_user)
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

  followNews(id_user: number, news: News): Observable<Follow> {
    return this.http.post(this.baseUrl + 'news/' + id_user, JSON.stringify(news), { headers: this.headers })
       .map(this.extractData)
       .catch(this.handleError);
  }

}