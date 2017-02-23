import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { News, User }       from '../../model/_model'; 
import { UserService,NewsService } from '../../services/services';


@Component({
  selector: 'page-newsForm',
  templateUrl: 'newsForm.html'
})

export class NewsForm {
  private users: User[];
  private date: string = new Date().toISOString(); 
  private news = new News ( 0, '', '', this.date, 1);

  constructor( public alertCtrl: AlertController, private _newsService: NewsService, public navCtrl: NavController, public _userService: UserService ) { 
    
  }

  public onSubmit() {
    this.addNews(this.news);
    let alert = this.alertCtrl.create({
      title: 'New News',
      subTitle: 'News ajouté avec success!'
    });
    alert.present();
  } 

  ionViewWillEnter() {
    this.getUsers();
  }

  private addNews(news): void {
    this._newsService
        .addNews(news)
        .subscribe((data: News) => this.news = data,
           error => console.log(error),
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
*/

  private getUsers(): void {
      this._userService
          .getUsers()
          .subscribe((data: User[]) => this.users = data,
              error => console.log(error),
              () => console.log('Get all Users complete'));
  }

}