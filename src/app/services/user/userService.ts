import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/_model';
import { ServiceBase } from '../serviceBase/serviceBase'

@Injectable()
export class UserService extends ServiceBase {
  private baseUrl = 'http://localhost/web/news-service/';
  private headers: Headers;

  constructor ( private http: Http ){
    super();
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getCurrentUser(): User{
    return new User("a123875114-bf258314", "Doe", "John");
  }

  getUsers (): Observable<User[]> {
    return this.http.get(this.baseUrl + 'user')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAUser (id_user: string): Observable<User> {
    return this.http.get(this.baseUrl + 'user/'+ id_user)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addUser (user: User): Observable<User> {
    return this.http.post(this.baseUrl + 'user', JSON.stringify( user ), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateUser (id_user: string, user: User): Observable<User>  {
    return this.http.put(this.baseUrl+ 'user/' + id_user, JSON.stringify(user), { headers: this.headers })
       .map(this.extractData)
       .catch(this.handleError);
  }

  deleteUser (id_user: string): Observable<Response> {
    return this.http.delete(this.baseUrl + 'user/' + id_user)
       .catch(this.handleError);
  }

}
