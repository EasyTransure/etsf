import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';
import { User }       from '../../model/user';
import { UserService } from '../../services/user/userService';

@Component({
  selector: 'page-userForm',
  providers: [UserService],
  templateUrl: 'userForm.html'
})

export class UserForm {
  private user = new User (7, '', '', '', '');
  
  constructor( public alertCtrl: AlertController, public navCtrl: NavController, public _userService: UserService  ) { }

  public onSubmit() {
    this.addUser(this.user) ;
    console.log(this.user); 
     let alert = this.alertCtrl.create({
      title: 'New User',
      subTitle: 'Utilisateur ajouté avec succèss!'
    });
    alert.present();
  } 

  private addUser(user): void {
    this._userService
        .addUser(user)
        .subscribe((data: User) => this.user = data,
           error => console.log(error),
           () => console.log('User Added'));
  }
/*
  private updateUser(user): void {
    this._userService
        .updateUser(user.id_user, user)
        .subscribe((data: User) => this.user = data,
           error => console.log(error),
           () => console.log('User Added'));
  }
*/
}