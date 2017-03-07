import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { News
  //, User 
}       from '../../model/_model'; 
import { UserService, NewsService } from '../../services/services';


@Component({
  selector: 'page-newsForm',
  templateUrl: 'newsForm.html'
})

export class NewsForm {
  //public users: User[] = [];
  public d: Date = new Date();
  public date = this.d.getFullYear() + "-" + ("0"+(this.d.getMonth()+1)).slice(-2) + "-" + ("0" + this.d.getDate()).slice(-2);
  public news: News;
  public type: string = 'Medication';
  public labelD: string = 'md-analytics';
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.


  constructor( public params: NavParams, public alertCtrl: AlertController, private _newsService: NewsService,
  public navCtrl: NavController, public _userService: UserService ) { 
    this.type =  params.data.type;
    this.news = new News (0, this.type, '', this.date, 1);
    if (this.type != 'Medication') {
      this.labelD = 'md-american-football';
    } else {
      this.labelD = 'md-analytics';
    }
  }

  public onSubmit() {
    this.addNews(this.news);
  } 
/*
  ionViewWillEnter() {
    this.getUsers();
  }
*/
  private addNews(news): void {
    this._newsService
        .addNews(news)
        .subscribe((data: News) => this.news = data,
           error =>{
              this.errorOccurred = true;
              console.log(error)
           },
           () => console.log('News Added'));
  }

/*
  private updateNews(news): void {
    this._userService
        .updateUser(news.id_user, news)
        .subscribe((data: News) => this.news = data,
           error => console.log(error),
           () => console.log('News updated'));
  }

  private getUsers(): void {
    this._userService
        .getUsers()
        .subscribe((data: User[]) => this.users = data,
            error =>{
              this.errorOccurred = true;
              console.log(error)
           },
           () => console.log('Get all Users complete'));
  }
*/

}