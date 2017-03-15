import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { RefActivity } from '../../model/_model';
import { ReferentialService } from '../../services/services';
import { DiaryForm } from '../pages'

@Component({
    selector: 'page-activityList',
    templateUrl: 'activity.list.html'
})

export class ActivityList {
    public activities: RefActivity[] = [];
    public temp: FirebaseListObservable<RefActivity[]> = null;
    public type: string = '';
    public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

    constructor(private refService: ReferentialService, public params: NavParams, public nav: NavController) {
        this.type = params.data.type;
    }

    ionViewWillEnter() {
        this.temp = this.refService.getActivities();
        this.initializeActivities();
    }
    /*
        createActivity() { }
    */
    public chooseActivity(activity) {
        this.nav.push(DiaryForm, { type: this.type, activity: activity });
    }

    public initializeActivities() {
        this.activities = [];
        this.temp.subscribe(array => {
            array.forEach(activity => {
                this.activities.push(activity);
            });
        });
    }

    public searchActivities(event) {
        this.initializeActivities();
        let val: string = event.target.value;
        if (val && val.trim() != '') {
            val = val.toLowerCase();
            this.activities = this.activities.filter((activity) => {
                return (activity.name.toLowerCase().indexOf(val) > -1);
            });
        }
    }

}
