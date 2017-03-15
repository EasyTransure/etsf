import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { UserService } from '../../services/services';
import { Tabs, ConnectionLoginPage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class Home {

  constructor(public userService: UserService, public nav: NavController, public af: AngularFire) { }

  ionViewWillEnter() {
    let goToLogin = setTimeout(() => {
      this.nav.setRoot(Tabs);
      this.nav.push(ConnectionLoginPage);
    }, 5000);
    this.af.auth.subscribe((val) => {
      if (val) {
        this.userService.initUser().subscribe(data => {
          clearTimeout(goToLogin);
          this.nav.setRoot(Tabs);
        });
      }
      else {
        this.nav.setRoot(Tabs);
        this.nav.push(ConnectionLoginPage);
      }
    });
  }

}
