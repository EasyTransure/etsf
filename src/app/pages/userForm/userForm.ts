import { Component } from '@angular/core'; 
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/_model';
import { UserService } from '../../services/services';

@Component({
  selector: 'page-userForm',
  templateUrl: 'userForm.html'
})

export class UserForm {
  private user: User;

  constructor( public params: NavParams, public alertCtrl: AlertController, public navCtrl: NavController, public _userService: UserService) { 
    this.user = params.data.user;
  }

  public onSubmit() {
    this.updateUser(this.user);
    console.log(this.user);
    let alert = this.alertCtrl.create({
      title: 'Edit User',
      subTitle: 'Utilisateur mis à jour avec succèss!'
    });
    alert.present();
  }

  /*
  private addUser(user): void {
    this._userService
      .addUser(user)
      .subscribe((data: User) => this.user = data,
      error => console.log(error),
      () => console.log('User Added'));
  }
  */

  private updateUser(user): void {
    this._userService
        .updateUser(user.id_user, user)
        .subscribe((data: User) => this.user = data,
           error => console.log(error),
           () => console.log('User Modified'));
  }
  
}