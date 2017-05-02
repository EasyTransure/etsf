import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/services';
import { User } from '../../model/_model';
import { UserForm } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class Home {
  public user: User;
  constructor(public nav: NavController, public userService: UserService) { }

  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
  }

  public goToCamera() {
    console.log('change picture')
  }

  public updateUser(user: User) {
    this.nav.push(UserForm, { user: user });
  }

  public logout() {
    this.userService.logout();
  }
}
