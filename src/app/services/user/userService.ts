import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user';

@Injectable()
export class UserService{
  private baseUrl = 'http://localhost/web/news-service/';
  private headers: Headers;
  constructor ( private http: Http){this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getUsers (): Observable<User[]> {
    return this.http.get(this.baseUrl+'user')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAUser (id_user: number): Observable<User> {
    return this.http.get(this.baseUrl+'user/'+id_user)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addUser (user: User): Observable<User> {
    return this.http.post(this.baseUrl + 'user', JSON.stringify( user ), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateUser (id_user: number, user: User): Observable<User>  {
    return this.http.put(this.baseUrl + id_user, JSON.stringify(user), { headers: this.headers })
       .map(this.extractData)
       .catch(this.handleError);
  }

  deleteUser (id_user: number): Observable<Response> {
    return this.http.delete(this.baseUrl + id_user)
       .catch(this.handleError);
  }


   private extractData(res: Response): any {
       if (res.status < 200 || res.status >= 300) {
             throw new Error('Bad response status: ' + res.status);
           }
       let body = res.json();
       return body || { };
    }

  private handleError (error: any) {
      let errMsg = error.message || 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

}
