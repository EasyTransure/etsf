import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceBase {

  constructor( ) { }

  public extractData(res: Response): any {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }

  public handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}