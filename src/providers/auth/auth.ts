import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthProvider {

  isLoggedIn: boolean = false;

  login(login): Observable<any> {
    return Observable.of(true).delay(2000).do(val => {
      if (login["username"] == "user" && login["password"] == "12345") {
        this.isLoggedIn = true;
      }
    })
  }

}
