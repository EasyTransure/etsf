import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { RefActivity, RefSymptom } from '../../model/_model';

@Injectable()
export class ReferentialService {

  constructor(private af: AngularFire) { }

  public getActivities(): FirebaseListObservable<RefActivity[]> {
    return this.af.database.list('/ref/activity');
  }

  public getSymptoms(): FirebaseListObservable<RefSymptom[]> {
    return this.af.database.list('/ref/symptom');
  }

}
