import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/_model';
import { ServiceBase } from '../serviceBase/serviceBase'

@Injectable()
export class UserService extends ServiceBase {
  constructor(private af: AngularFire) {
    super();
  }

  public getCurrentUser(): User {
    if (this.af.auth.getAuth()) {
      return new User("8cFAETZuzMT7gMWhhi4dDIVtAp13", "Doe", "John");
    }
    return null;
  }

  public loginWithEmailAndPassword(email: string, password: string): Observable<boolean> {
    console.log('Login : ', email, password)
    return Observable.create( observer => {
      this.af.auth.login({ email: email, password: password }).then(() => {
        observer.next(true);
        observer.complete();
      }).catch((err)=> {
        console.log(err);
        observer.next(false);
        observer.complete();
      })
    });
  }

}
