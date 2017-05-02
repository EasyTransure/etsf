import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/_model';

@Injectable()
export class UserService {
  public user: User = null;
  public defaultImage = "https://firebasestorage.googleapis.com/v0/b/ets-back.appspot.com/o/darius_medie%40yahoo.com%2Fprofile.png?alt=media&token=30cf1066-dba8-4793-b4a0-28aa995a427c";
  public uid: string;
  public userOb: FirebaseObjectObservable<User>;
  public userAdd: FirebaseListObservable<User[]>;

  constructor(private af: AngularFire) { }

  public getCurrentUser(): User {
    if (this.uid) {
      return this.user;
    }
    else {
      return null;
    }
  }

  public updateUser(user: User): Observable<boolean> {
    return Observable.create(observer => {
      this.userOb.update(user).then(() => {
        observer.next(true);
        observer.complete();
      }).catch((err) => {
        console.log(err);
        observer.next(false);
        observer.complete();
      });
    });
  }

  public addUser(user: User): Observable<boolean> {
    return Observable.create(observer => {
      let key: string = this.uid;
      this.userAdd.push(user).then((data) => {
        this.userAdd.update(key, user);
        observer.next(true);
        observer.complete();
      }).catch((err) => {
        console.log(err);
        observer.next(false);
        observer.complete();
      })
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

  public signUp(email: string, password: string): Observable<boolean> {
    return Observable.create(observer => {
      this.af.auth.createUser({ email, password }).then((userDate) => {
        this.uid = userDate.uid;
        let newUser = new User(this.uid, "", "", email, this.defaultImage);
        this.addUser(newUser).subscribe(val => {
          observer.next(true);
          observer.complete();
        });
      }).catch((err) => {
        console.log(err);
        observer.next(false);
        observer.complete();
      })
    });
  }

  public logout(): Promise<void> {
    return this.af.auth.logout();
  }

  public initUser(): FirebaseObjectObservable<User> {
    this.af.auth.subscribe((data) => {
      if (data) {
        this.uid = data["uid"];
      }
    });
    this.userOb = this.af.database.object('/user/' + this.uid);
    this.userOb.subscribe((data) => {
      this.user = new User(data.uid, data.name, data.surname, data.email, data.image);
    });
    this.initAllUser();
    return this.userOb;
  }

  public initAllUser(): void {
    this.userAdd = this.af.database.list('/user');
  }

}