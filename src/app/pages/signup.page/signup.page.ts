import { Component } from '@angular/core';
import { UserService } from '../../services/services';

@Component({
    selector: 'page-signUpPage',
    templateUrl: 'signup.page.html'
})

export class SignUpPage {
    public email: string;
    public password: string;
    public loginError: boolean;

    public constructor(private userService: UserService) { }

    ionViewWillEnter() {
        console.log('entering sign up page');
    }

    public signUp() {
        this.userService.signUp(this.email, this.password).subscribe(val => {
            this.loginError = !val;
        });
    }

}