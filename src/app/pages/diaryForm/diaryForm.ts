import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { DiaryEntry, SymptomCheck, Medication, Activity, FreeEntry, RefActivity } from '../../model/_model';
import { UserService, DiaryService } from '../../services/services';
import { SymptomList } from '../pages';

@Component({
  selector: 'page-diaryForm',
  templateUrl: 'diaryForm.html'
})

export class DiaryForm {
  public entry: DiaryEntry;
  public type: string = '';
  public labelD: string = '';
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor(public params: NavParams, public alertCtrl: AlertController, private diaryService: DiaryService,
    public navCtrl: NavController, public userService: UserService) {
    this.type = params.data.type;
    this.entry = new DiaryEntry('', this.type, '', (new Date()).getTime().toString(), 'a123875114-bf258314');
    if (this.type == 'SymptomCheck') {
      this.labelD = 'md-american-football';
      let symptomCheck: SymptomCheck = new SymptomCheck(3, null);
      this.entry.symptomCheck = symptomCheck;
    }
    if (this.type == 'Medication') {
      this.labelD = 'md-analytics';
      let medication: Medication = new Medication();
      this.entry.medication = medication;
    }
    if (this.type == 'Activity') {
      this.labelD = 'md-paper-plane';
      let activ: RefActivity = params.data.activity;
      let activity: Activity = new Activity(activ, '', '', 0);
      this.entry.activity = activity;
    }
    if (this.type == 'FreeEntry') {
      this.labelD = 'md-thermometer';
      let freeEntry: FreeEntry = new FreeEntry();
      this.entry.freeEntry = freeEntry;
    }
  }

  public onSubmit() {
    this.diaryService.addNewEntry(this.userService.getCurrentUser(), this.entry);
  }

  public chooseSymptoms() {
    this.navCtrl.push(SymptomList, {symptoms : this.entry.symptomCheck.symptoms});
  }

}
