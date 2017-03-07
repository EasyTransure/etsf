import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { User } from '../../model/_model'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  public user: User = new User('1');
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor( public alertCtrl: AlertController, public navCtrl: NavController ) { }
/*
  onSubmit() {

  }
*/

}
