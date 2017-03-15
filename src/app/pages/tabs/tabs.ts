import { Component } from '@angular/core';
import { MyDiary } from '../pages';
import { User } from '../../model/_model';
import { UserService } from '../../services/services';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  infoRoot: any = "";
  journalRoot: any = MyDiary;
  tabCount1: number = 0;
  tabCount2: number = 0;
  tabCount3: number = 0;

  constructor(public userService: UserService) {
  }

  ionViewWillEnter() {
    let user: User = this.userService.getCurrentUser();
    if (user) this.tabCount1 = user.number;
  }

}
