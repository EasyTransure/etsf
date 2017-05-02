import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/_model';
import { UserService } from '../../services/services';

@Component({
  selector: 'page-userForm',
  templateUrl: 'user.form.html'
})

export class UserForm {
  public user: User;

  constructor(public params: NavParams, public navCtrl: NavController, public userService: UserService) {
    this.user = params.data.user;
  }

  public onSubmit() {
    this.userService.updateUser(this.user).subscribe(() => {
      console.log("hehhre");
    });
  }

}
