import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { Observable } from 'rxjs/Observable';

import { DiaryEntry, User } from '../../model/_model';

@Injectable()
export class DiaryService {

  private entriesForUser: FirebaseListObservable<DiaryEntry[]>;

  constructor(private af: AngularFire) { }

  public getEntriesForUser(user: User): FirebaseListObservable<DiaryEntry[]> {
    this.initEntriesForUser(user.id_user);
    return this.entriesForUser;
  }

  public addNewEntry(user: User, entry: DiaryEntry): void {
    console.log('addnewentry', this.entriesForUser);
    this.entriesForUser.push(entry);
  }

  private initEntriesForUser(uid: string): void{
    if (!this.entriesForUser){
      this.entriesForUser = this.af.database.list('/diary/' + uid);
    }
  }

}
