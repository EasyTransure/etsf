import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { User } from '../../model/_model';
import { UserService } from '../../services/services';
import { UserForm } from '../pages';

@Component({
  selector: 'page-myProfile',
  templateUrl: 'myProfile.html'
})

export class MyProfile {
  public user: User;

  constructor( public nav: NavController, public params: NavParams, public _userService: UserService ) { }

  ionViewWillEnter() {
    this.getUser(1);
  }

  updateAUser(user: User) {
    this.nav.push(UserForm, { user: user });
  }

  private getUser(id_user: number): void {
    this._userService
        .getAUser(id_user)
        .subscribe((data: User) => this.user = data,
            error => console.log(error),
            () => console.log('Get all Users complete'));
            
    console.log("this.user");
  }
 
}