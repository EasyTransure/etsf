import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { DiaryEntry
  //, SymptomCheck, Medication, Activity, FreeEntry
} from '../../model/_model';
import { UserService, DiaryService } from '../../services/services';


@Component({
  selector: 'page-diaryForm',
  templateUrl: 'diaryForm.html'
})

export class DiaryForm {
  public entry: DiaryEntry;
  /*public activity: Activity = null;
  public freeEntry: FreeEntry = null;
  public medication: Medication = null;
  public symptomCheck: SymptomCheck = null;*/
  public type: string = '';
  public labelD: string = '';
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor(public params: NavParams, public alertCtrl: AlertController, private diaryService: DiaryService,
    public navCtrl: NavController, public userService: UserService) {
    this.type = params.data.type;
    this.entry = new DiaryEntry('', this.type, '', (new Date()).getTime().toString(), 'a123875114-bf258314');
    if (this.type == 'SymptomCheck') {
      this.labelD = 'md-american-football';
     // this.entry = new DiaryEntry('', this.type, '', this.date, 'a123875114-bf258314');
      //this.entry.symptomCheck.rating = 3;
    }
    if (this.type == 'Medication') {
      this.labelD = 'md-analytics';
      //this.entry = new DiaryEntry('', this.type, '', this.date, 'a123875114-bf258314');
    }
    if (this.type == 'Activity') {
      this.labelD = 'md-paper-plane';
      //this.entry = new DiaryEntry('', this.type, '', this.date, 'a123875114-bf258314');
    }
    if (this.type == 'FreeEntry') {
      this.labelD = 'md-thermometer';
      //this.entry = new DiaryEntry('', this.type, '', this.date, 'a123875114-bf258314');
    }
  }

  public onSubmit() {
    this.diaryService.addNewEntry(this.userService.getCurrentUser(), this.entry);
  }

}
