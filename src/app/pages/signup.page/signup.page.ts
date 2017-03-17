import { NavController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { UserService } from '../../services/services';

@Component({
    selector: 'page-signUpPage',
    templateUrl: 'signup.page.html'
})

export class SignUpPage {
    public email: string;
    public password: string;

    public constructor(private userService: UserService, private navController: NavController, private toastCtrl: ToastController) { }

    ionViewWillEnter() {
        console.log('entering sign up page');
    }

    public signUp() {
        console.log('sign up');
        let toast = this.toastCtrl.create({
            message: 'User has been signed up',
            duration: 3000
        });
        toast.present();
        this.navController.pop();
    }

}