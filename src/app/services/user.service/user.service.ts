import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/_model';

@Injectable()
export class UserService {
  public user: User = null;
  public userOb: FirebaseObjectObservable<User>;

  constructor(private af: AngularFire) {
  }

  public getCurrentUser(): User {
    if (this.af.auth.getAuth()) {
      return this.user;
    }
    else {
      return null;
    }
  }

  public updateUser(user: User): void {
    let key: string = user.id_user;
    this.userOb.subscribe((data) => {
       data[key] = user;
       this.userOb.update(data);
    });
  }

  public loginWithEmailAndPassword(email: string, password: string): Observable<boolean> {
    return Observable.create(observer => {
      this.af.auth.login({ email: email, password: password }).then(() => {
        observer.next(true);
        observer.complete();
      }).catch((err) => {
        console.log(err);
        observer.next(false);
        observer.complete();
      })
    });
  }

  public logout(): Promise<void> {
    console.log('Logging out ');
    return this.af.auth.logout();
  }

  public initUser(): FirebaseObjectObservable<User> {
    let uid: string = this.af.auth.getAuth().uid;
    this.userOb = this.af.database.object('/user/', + uid);
    this.userOb.subscribe((data) => {
      this.user = data[uid];
    });
    return this.userOb;
  }

}
