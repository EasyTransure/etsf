import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { UserService } from '../../services/services';

@Component({
    selector: 'page-signUpPage',
    templateUrl: 'signup.page.html'
})

export class SignUpPage {
    public email: string;
    public password: string;

    public constructor(private userService: UserService, private navController: NavController) { }

    ionViewWillEnter() {
        console.log('entering sign up page');
    }

    public signUp() {
        console.log('sign up');
        this.navController.pop();
    }

}