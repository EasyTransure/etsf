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
  
  constructor(public params: NavParams, public navCtrl: NavController, public _userService: UserService) {
    this.user = params.data.user;
  }

  public onSubmit() {
    this._userService.updateUser(this.user);
    this.navCtrl.push(MyProfile);
  }

}
