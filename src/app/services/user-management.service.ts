import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private router: Router) { }

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

  async getLoggedInUser(){
    return await Auth.currentAuthenticatedUser();
  }

}
