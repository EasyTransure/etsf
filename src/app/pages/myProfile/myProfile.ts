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
  public user: User = new User('1');
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor(public nav: NavController, public params: NavParams, public _userService: UserService) { }

  ionViewWillEnter() {
    this.getUser(this.user.id_user);
  }

  public updateAUser(user: User) {
    this.nav.push(UserForm, { user: user });
  }

  public getUser(id_user: string): void {
    this.user = this._userService.getCurrentUser();
  }

}
