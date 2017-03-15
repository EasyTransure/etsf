import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { User } from '../../model/_model';
import { UserService } from '../../services/services';
import { UserForm } from '../pages';

@Component({
  selector: 'page-myProfile',
  templateUrl: 'my.profile.html'
})

export class MyProfile {
  public user: User = new User('1');
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor(public nav: NavController, public params: NavParams, public _userService: UserService) { }

  ionViewWillEnter() {
    this.getUser();
  }

  public updateAUser(user: User) {
    this.nav.push(UserForm, { user: user });
  }

  public getUser(): void {
    this.user = this._userService.getCurrentUser();
  }

  public logout() {
    this._userService.logout();
  }

}
