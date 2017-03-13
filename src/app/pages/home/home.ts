import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

import { ConnectionLoginPage, Tabs } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class Home {

  constructor(nav: NavController, private af: AngularFire) {
    let goToLogin = setTimeout(() => {
      nav.setRoot(Tabs);
      nav.push(ConnectionLoginPage);
    }, 5000);
    af.auth.subscribe(() => {
      console.log('We are logged!');
      clearTimeout(goToLogin);
      nav.setRoot(Tabs);
    });
  }

}
