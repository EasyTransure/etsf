import { NavController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { UserService } from '../../services/services';

@Component({
    selector: 'page-resetPassword',
    templateUrl: 'reset.password.html'
})

export class ResetPassword {
    public email: string;
    public password: string;

    public constructor(private userService: UserService, private navController: NavController, private toastCtrl: ToastController) { }

    ionViewWillEnter() {
        console.log('entering reset password page');
    }

    public reset() {
        console.log('reset');
        let toast = this.toastCtrl.create({
            message: 'User password has been reseted',
            duration: 3000
        });
        toast.present();
        this.navController.pop();
    }

}