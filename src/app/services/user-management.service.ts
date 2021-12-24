import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {


  constructor(private router: Router) {  }

  async loginWithCognito(username: string, password: string, redirectRoute: string) {
    try {
      var user = await Auth.signIn(username, password);
      var tokens = user.signInUserSession;
      if (tokens != null) {
        console.log('User authenticated');
        this.router.navigate([redirectRoute]);
        alert('You are logged in successfully !');
      }
      else {
        console.log("tokens are null !!!");
      }
    } catch (error) {
      console.log(error);
      alert('User Authentication failed');
    }
  }

  getLoggedInUserSession():Observable<any> {
    let user = Auth.currentSession();
    return from(user);
  }

  getIdToken(): Observable<any> {
    // return Observable.fromPromise((await this.getLoggedInUserSession()).getIdToken().getJwtToken());
    return this.getLoggedInUserSession()
      .pipe(
        map(value => {
          value.getIdToken().getJwtToken()
        })
      )
  }
}
