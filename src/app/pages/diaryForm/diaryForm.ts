import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { DiaryEntry, SymptomCheck, Medication, Activity, FreeEntry, RefActivity, CheckedSymptom, RefSymptom } from '../../model/_model';
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
  public symptoms: CheckedSymptom[] = [];
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor(public params: NavParams, public alertCtrl: AlertController, private diaryService: DiaryService,
    public navCtrl: NavController, public userService: UserService) {
    this.type = params.data.type;
    this.entry = new DiaryEntry('', this.type, '', (new Date()).getTime().toString(), 'a123875114-bf258314');
    this.initType(this.type);
  }

  public initType(type: String) {
    switch (type) {
      case 'SymptomCheck':
        this.labelD = 'md-american-football';
        let symptomCheck: SymptomCheck = new SymptomCheck(3, []);
        this.entry.symptomCheck = symptomCheck;
        this.symptoms = this.convertArrayType(this.entry.symptomCheck.symptoms);
        break;
      case 'Medication':
        this.labelD = 'md-analytics';
        let medication: Medication = new Medication();
        this.entry.medication = medication;
        break;
      case 'Activity':
        this.labelD = 'md-paper-plane';
        let activ: RefActivity = this.params.data.activity;
        let activity: Activity = new Activity(activ, '', '', 0);
        this.entry.activity = activity;
        break;
      case 'FreeEntry':
        this.labelD = 'md-thermometer';
        let freeEntry: FreeEntry = new FreeEntry();
        this.entry.freeEntry = freeEntry;
        break;
    }
  }

  public onSubmit() {
    if (this.type == 'SymptomCheck') {
      this.entry.symptomCheck.symptoms = this.reconvertArrayType(this.symptoms);
    }
    this.diaryService.addNewEntry(this.userService.getCurrentUser(), this.entry);
    this.navCtrl.popToRoot();
  }

  public chooseSymptoms() {
    this.navCtrl.push(SymptomList, { symptoms: this.symptoms });
  }

  public convertArrayType(unchecked: RefSymptom[]): CheckedSymptom[] {
    let checked: CheckedSymptom[] = [];
    unchecked.forEach((element) =>
      checked.push(new CheckedSymptom(element.id, element.name))
    );
    return checked;
  }

  public reconvertArrayType(checked: CheckedSymptom[]): RefSymptom[] {
    let unchecked: RefSymptom[] = [];
    checked.forEach((element) => {
      if (element.checked === true) {
        unchecked.push(new RefSymptom(element.id, element.name));
      }
    });
    return unchecked;
  }

}
