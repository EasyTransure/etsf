import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/_model';

@Injectable()
export class UserService {
  constructor(private af: AngularFire) {
  }

  public getCurrentUser(): User {
    if (this.af.auth.getAuth()) {
      return new User("8cFAETZuzMT7gMWhhi4dDIVtAp13", "MEDIE", "Darius");
    }
    return null;
  }

  public loginWithEmailAndPassword(email: string, password: string): Observable<boolean> {
    console.log('Login : ', email, password)
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

}
