import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { DiaryEntry, User } from '../../model/_model';
import { DiaryService, UserService } from '../../services/services';
import { ConnectionLoginPage, DiaryDescription, DiaryForm, ActivityList } from '../pages'

@Component({
  selector: 'page-myDiary',
  templateUrl: 'myDiary.html'
})

export class MyDiary {
  public myDiaryEntries: DiaryEntry[] = [];
  public type: string = '';
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor(public nav: NavController, private diaryService: DiaryService, public act: ActionSheetController,
    private userService: UserService) { }

  createDiary() {
    let actionSheet = this.act.create({
      title: 'Type',
      cssClass: 'page-myDiary',
      buttons: [
        {
          text: 'Medication',
          icon: 'analytics',
          handler: () => {
            this.type = 'Medication',
              this.nav.push(DiaryForm, { type: this.type });
          }
        },
        {
          text: 'Symptom Check',
          icon: 'american-football',
          handler: () => {
            this.type = 'SymptomCheck',
              this.nav.push(DiaryForm, { type: this.type });
          }
        },
        {
          text: 'Activity',
          icon: 'paper-plane',
          handler: () => {
            this.type = 'Activity',
              this.nav.push(ActivityList, { type: this.type });
          }
        },
        {
          text: 'Free Entry',
          icon: 'thermometer',
          handler: () => {
            this.type = 'FreeEntry',
              this.nav.push(DiaryForm, { type: this.type });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close'
        }
      ]
    });
    actionSheet.present();
  }

  goToDetails(entry) {
    this.nav.push(DiaryDescription, { entry: entry });
  }

  ionViewWillEnter() {
    let user: User = this.userService.getCurrentUser();
    if (!user) {
      this.nav.push(ConnectionLoginPage);
    }
    else {
      console.log('Getting diary for user');
      this.diaryService.getEntriesForUser(user).subscribe((entries) => {
        this.myDiaryEntries = entries.reverse();
      });
    }
  }

}
