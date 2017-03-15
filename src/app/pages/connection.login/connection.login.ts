import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { UserService } from '../../services/services';
import { SignUpPage, ResetPassword } from '../pages';

@Component({
  selector: 'page-connectionLogin',
  templateUrl: 'connection.login.html'
})

export class ConnectionLoginPage {
  public email: string;
  public password: string;

  public loginError: boolean;

  public constructor(private userService: UserService, private navController: NavController) { }

  ionViewWillEnter() {
    console.log('entering login page');
  }

  public login() {
    this.userService.loginWithEmailAndPassword(this.email, this.password).subscribe(val => {
      this.loginError = !val;
    });
  }

  public goToSignup() {
    this.navController.push(SignUpPage);
  }

  public goToResetPassword() {
    this.navController.push(ResetPassword);
  }

}
