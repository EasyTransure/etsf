import { Component } from '@angular/core';
//import { NavController, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { RefSymptom } from '../../model/_model';
import { ReferentialService } from '../../services/services';
//import { NewsForm } from '../pages'

@Component({
    selector: 'page-symptomList',
    templateUrl: 'symptomList.html'
})

export class SymptomList {
    public symptoms: RefSymptom[];
    public temp: FirebaseListObservable<RefSymptom[]>;
    public mySymptoms: RefSymptom[];
    public symptom: RefSymptom;
    public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

    constructor(private refService: ReferentialService) { }

    ionViewWillEnter() {
        this.temp = this.refService.getSymptoms();
        this.initializeSymptoms()
    }
    /*
        createASymptom() { }
    */
    public addSymptom({symptom: symptom}) {
        if (this.mySymptoms.find(symptom) == undefined) {
            this.mySymptoms.push(symptom);
        } else { ; }
    }

    public initializeSymptoms() {
        this.symptoms = [];
        this.temp.subscribe(array => {
            array.forEach(symptom => {
                this.symptoms.push(symptom);
            });
        });
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
}
