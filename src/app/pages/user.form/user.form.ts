import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/_model';
import { MyProfile } from '../pages';
import { UserService } from '../../services/services';

@Component({
  selector: 'page-userForm',
  templateUrl: 'user.form.html'
})

export class UserForm {
  public user: User = new User('1');
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor(public params: NavParams, public navCtrl: NavController, public _userService: UserService) {
    this.user = params.data.user;
  }

  public onSubmit() {
    this.updateUser(this.user);
    this.navCtrl.push(MyProfile);
  }

  public updateUser(user): void {
    console.log(user);
  }

}
