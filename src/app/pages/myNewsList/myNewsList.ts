import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { News }       from '../../model/_model'; 
import { NewsService } from '../../services/services';
import { NewsDescription, NewsForm } from '../pages'

@Component({
  selector: 'page-myNewsList',
  templateUrl: 'myNewsList.html'
})

export class MyNewsList  {
  public myNews: News[];

  constructor(public nav: NavController, private _newsService: NewsService) { }
  
  createANews() {
    this.nav.push(NewsForm);
  }

  goToDetails(newsInfo) {
    this.nav.push(NewsDescription, { newsInfo: newsInfo });
  }

  ionViewWillEnter() {
    this.getMyNews(1);
  }
   
  searchNews(ev) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      console.log("I am searching...");
    }
  }
   
  public getMyNews(id_user: number): void {
    this._newsService
        .getMyNews(id_user)
        .subscribe((data: News[]) => this.myNews = data,
           error => console.log(error),
           () => console.log('Get all my News complete'));
  }

}