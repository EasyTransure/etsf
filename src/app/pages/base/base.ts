import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { UserService } from '../../services/services';
import { Home, ConnectionLoginPage } from '../pages';

@Component({
  selector: 'page-base',
  templateUrl: 'base.html'
})

export class Base {

  constructor(public userService: UserService, public nav: NavController, public af: AngularFire) { }

  ionViewWillEnter() {
    this.af.auth.subscribe((val) => {
      if (val) {
        this.userService.initUser().subscribe(data => {
          this.nav.setRoot(Home);
        });
      }
      else {
        this.nav.setRoot(ConnectionLoginPage);
      }
    });
  }

}
