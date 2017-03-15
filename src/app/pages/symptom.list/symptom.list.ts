import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { RefSymptom, CheckedSymptom } from '../../model/_model';
import { ReferentialService } from '../../services/services';
import { DiaryForm } from '../pages'

@Component({
    selector: 'page-symptomList',
    templateUrl: 'symptom.list.html'
})

export class SymptomList {
    public symptoms: CheckedSymptom[] = [];
    public temp: FirebaseListObservable<RefSymptom[]> = null;
    public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

    constructor(private refService: ReferentialService, private nav: NavController, private params: NavParams) { }

    ionViewWillEnter() {
        this.symptoms = this.params.data.symptoms;
        this.temp = this.refService.getSymptoms();
        this.initializeSymptoms();
    }
    /*
        createASymptom() { }
    */
    public selectSymptom(symptom) {
        this.symptoms.filter((data) => {
            if (data.id === symptom.id) {
                data.checked = !data.checked;
            }
        });
    }

    public onSubmit() {
        this.nav.popTo(DiaryForm, { symptoms: this.symptoms });
    }

    public initializeSymptoms() {
        if (this.symptoms.length === 0) {
            this.temp.subscribe(array => {
                array.forEach(symptom => {
                    this.symptoms.push(this.convertType(symptom));
                });
            });
        } else {

        }
    }

    public searchSymptoms(event) {
        this.initializeSymptoms();
        let val: string = event.target.value;
        if (val && val.trim() != '') {
            val = val.toLowerCase();
            this.symptoms = this.symptoms.filter((symptom) => {
                return (symptom.name.toLowerCase().indexOf(val) > -1);
            });
        }
    }

    public convertType(unchecked: RefSymptom): CheckedSymptom {
        return (new CheckedSymptom(unchecked.id, unchecked.name));
    }
}
