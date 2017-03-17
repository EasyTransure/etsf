import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DiaryEntry, User } from '../../model/_model';

@Injectable()
export class DiaryService {

  public entriesForUser: FirebaseListObservable<DiaryEntry[]>;

  constructor(private af: AngularFire) { }

  public getEntriesForUser(user: User): FirebaseListObservable<DiaryEntry[]> {
    this.initEntriesForUser(user.id_user);
    return this.entriesForUser;
  }

  public addNewEntry(user: User, entry: DiaryEntry): void {
    this.entriesForUser.push(entry).then((item) => {
      let key = item.key;
      entry.id = key;
      this.entriesForUser.update(key, entry);
    });
  }

  private initEntriesForUser(uid: string): void {
    this.entriesForUser = this.af.database.list('/diary/' + uid);
  }

}