import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { News }       from '../../model/_model';
import { NewsService } from '../../services/services';
import { NewsDescription } from '../pages'

@Component({
  selector: 'page-newsList',
  templateUrl: 'newsList.html'
})

export class NewsList  {
  public myNews: News[] = [];

  constructor(public nav: NavController, private _newsService: NewsService) { }

  goToDetails(newsInfo) {
    this.nav.push(NewsDescription, { newsInfo: newsInfo });
  }

  ionViewWillEnter() {
    this.getAllNews();
  }

  public getAllNews(): void {
    this._newsService
        .getNews()
        .subscribe((data: News[]) => this.myNews = data,
           error => console.log(error),
           () => console.log('Get all News complete'));
  }

}
