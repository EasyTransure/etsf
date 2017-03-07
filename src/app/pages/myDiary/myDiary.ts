import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { DiaryEntry }       from '../../model/_model';
import { DiaryService, UserService } from '../../services/services';
import { NewsDescription, NewsForm } from '../pages'

@Component({
  selector: 'page-myDiary',
  templateUrl: 'myDiary.html'
})

export class MyDiary  {
  public myDiaryEntries: FirebaseListObservable<DiaryEntry[]>;
  public type: string = '';
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor(public nav: NavController, private diaryService: DiaryService, public act: ActionSheetController,
    private userService: UserService) { }

  createANews() {
    let actionSheet = this.act.create({
      title: 'Type',
      cssClass: 'page-myDiary',
      buttons: [
        {
          text: 'Medication',
          icon: 'md-analytics',
          handler: () => {
            this.type = 'Medication',
            this.nav.push(NewsForm, { type: this.type });
          }
        },
        {
          text: 'Symptom Check',
          icon: 'md-american-football',
          handler: () => {
            this.type = 'SymptomCheck',
            this.nav.push(NewsForm, { type: this.type });
          }
        },
        {
          text: 'Activity',
          icon: 'md-paper-plane',
          handler: () => {
            this.type = 'Activity',
            this.nav.push(NewsForm, { type: this.type });
          }
        },
        {
          text: 'Free Entry',
          icon: 'md-thermometer',
          handler: () => {
            this.type = 'FreeEntry',
            this.nav.push(NewsForm, { type: this.type });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  goToDetails(entry) {
    this.nav.push(NewsDescription, { entry: entry });
  }

  ionViewWillEnter() {
    this.myDiaryEntries = this.diaryService.getEntriesForUser(this.userService.getCurrentUser());
  }

}
