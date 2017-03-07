import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { News }       from '../../model/_model'; 
import { NewsService } from '../../services/services';
import { NewsDescription, NewsForm } from '../pages'

@Component({
  selector: 'page-myNewsList',
  templateUrl: 'myNewsList.html'
})

export class MyNewsList  {
  public myNews: News[] = []; 
  public type: string;
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.


  constructor(public nav: NavController, private _newsService: NewsService, public act: ActionSheetController) { }
  
  createANews() {
    let actionSheet = this.act.create({
      title: 'Type',
      buttons: [
        {
          text: 'Medication',
          icon: 'md-analytics',
          handler: () => {
            this.type = 'Medication',
            this.nav.push(NewsForm, { type: this.type });
          }
        },
        {
          text: 'Symptome Check',
          icon: 'md-american-football',
          handler: () => {
            this.type = 'SymptomeCheck',
            this.nav.push(NewsForm, { type: this.type });
          }
        },
        {
          text: 'Activity',
          icon: 'md-paper-plane',
          handler: () => {
            this.type = 'Activity',
            this.nav.push(NewsForm, { type: this.type });
          }
        },
        {
          text: 'Free Entry',
          icon: 'md-thermometer',
          handler: () => {
            this.type = 'FreeEntry',
            this.nav.push(NewsForm, { type: this.type });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    
    actionSheet.present();
  }

  goToDetails(newsInfo) {
    this.nav.push(NewsDescription, { newsInfo: newsInfo });
  }

  ionViewWillEnter() {
    this.getMyNews(1);
  }
/*   
  searchNews(ev) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      console.log("I am searching...");
    }
  }
*/   
  public getMyNews(id_user: number): void {
    this._newsService
        .getMyNews(id_user)
        .subscribe((data: News[]) => this.myNews = data,
           error =>{
              this.errorOccurred = true;
              console.log(error)
           },
           () => console.log('Get all my News complete'));
  }

}