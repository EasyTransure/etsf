import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsService } from '../../services/news/newsService';
import { News } from '../../model/news';
import { NewsDescription } from '../newsDescription/newsDescription'

@Component({
  selector: 'page-newsList',
  templateUrl: 'newsList.html'
})

export class NewsList  {
  public myNews: News[];

  constructor(public nav: NavController, private _newsService: NewsService) { }
  
  goToDetails(newsInfo) {
    this.nav.push(NewsDescription, { newsInfo: newsInfo });
  }

  ionViewWillEnter() {
    this.getAllNews();
  }
    
  private getAllNews(): void {
    this._newsService
        .getNews()
        .subscribe((data: News[]) => this.myNews = data,
           error => console.log(error),
           () => console.log('Get all News complete'));
  }

}