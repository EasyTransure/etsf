import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { DiaryEntry, User } from '../../model/_model';

@Injectable()
export class DiaryService {

  constructor(private af: AngularFire) { }

  public getEntriesForUser(user: User): FirebaseListObservable<DiaryEntry[]> {
    console.log('Calling diary service for user ' + user.id_user);
    return <FirebaseListObservable<DiaryEntry[]>> this.af.database.list('/diary/' + user.id_user);
  }

}
