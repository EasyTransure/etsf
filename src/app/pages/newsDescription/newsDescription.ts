import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { News, Follow } from '../../model/_model';
import { NewsService } from '../../services/services';

@Component({
  selector: 'page-newsDescription',
  templateUrl: 'newsDescription.html'
})

export class NewsDescription {
  public newsInfo: News = new News (1, '', '', '', 0);
  public follow: Follow = new Follow(1, 1);
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor( public params: NavParams, public _newsService: NewsService ) { 
    this.newsInfo = params.data.newsInfo;
  }  

  followPerson(id_user) {
    this.followNews(id_user);
  }
  
  public followNews(id_user): void {
    this._newsService
      .followNews(id_user, this.newsInfo)
      .subscribe((data: Follow) => this.follow = data,
      error => {
        this.errorOccurred = true;
        console.log(error)
      },
      () => console.log('Follow completed'));
  }
}