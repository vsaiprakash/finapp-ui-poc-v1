import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';
import { BehaviorSubject, from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  userInfoSub: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  userInfo: Observable<any> = this.userInfoSub.asObservable();

  constructor(private router: Router) {  }

  loginWithCognito(username: string, password: string, redirectRoute: string) {
    try {
      Auth.signIn(username, password).then(
        user => {
          let tokens = user.signInUserSession;
          if (tokens != null) {
            console.log('User authenticated');
            console.log("user", user);
            console.log("tokens", tokens);
            this.userInfoSub.next(user);
            this.router.navigate([redirectRoute]);
            alert('You are logged in successfully !');
          }
          else {
            console.log("tokens are null !!!");
          }
        },
        failure => {
          console.log(failure);
          alert('User Authentication failed');
        }
      )

    //   var user = await Auth.signIn(username, password);
    //   var tokens = user.signInUserSession;
    //   if (tokens != null) {
    //     console.log('User authenticated');
    //     console.log("tokens", tokens);
    //     this.router.navigate([redirectRoute]);
    //     alert('You are logged in successfully !');
    //   }
    //   else {
    //     console.log("tokens are null !!!");
    //   }
      }
      // catch (error) {
      //   console.log(error);
      //   alert('User Authentication failed');
      // }
      
      finally {
        console.log("Finally");
      

    }
  }

  logoutWithCognito(){
    try {
      Auth.signOut().then(
        success => {
          console.log("successfully signout!", success);
          this.userInfoSub.next(null);
        },
        failure => {
          console.log("failed to signout!", failure);
        }
      )
    } 
    finally {
      console.log("Finally");
    }
  }

  getUserInfo(): Observable<any>{
    return this.userInfo;
  }

  isLoggedIn(): Observable<boolean>{
    return this.userInfo.pipe(
      map(user => {
        return (user==null)?false:true;
      })
    )
  }

  getIdToken(): Observable<string> {
    return this.userInfo.pipe(
      map(user => {
        return user.signInUserSession.idToken;
      })
    )
  }
}
