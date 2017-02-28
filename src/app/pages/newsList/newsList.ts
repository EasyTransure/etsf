import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { News }       from '../../model/_model'; 
import { NewsService } from '../../services/services';
import { NewsDescription, NewsForm } from '../pages';

@Component({
  selector: 'page-newsList',
  templateUrl: 'newsList.html'
})

export class NewsList  {
  public allNews: News[];

  constructor(public nav: NavController, private _newsService: NewsService) { }
  
  createANews() {
    this.nav.push(NewsForm);
  }

  goToDetails(newsInfo) {
    this.nav.push(NewsDescription, { newsInfo: newsInfo });
  }

  ionViewWillEnter() {
    this.getAllNews();
  }
  
  searchNews(ev) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      console.log("I am searching...");
    }
  }
  
  public getAllNews(): void {
    this._newsService
        .getNews()
        .subscribe((data: News[]) => this.allNews = data,
           error => console.log(error),
           () => console.log('Get all News complete'));
  }

}