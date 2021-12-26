import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../config/constants';
import { UtilService } from './util.service';
import { UserManagementService } from './user-management.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userInfo: any;



  constructor(
    private http: HttpClient, 
    private utils: UtilService,
    private user: UserManagementService
  ) {
    this.user.getUserInfo().subscribe(user => this.userInfo = user);

  }

  getAccounts():  Observable<any> {
    // let header = new Headers();
    // header.append('Content-Type', 'application/json');
    // header.append('Authorization', 'Bearer '+this.userInfo.signInUserSession.idToken.jwtToken);
    // return this.http.get("assets/data/accounts.json");
    return this.http.get(
      // "https://cors.io/?"+
      Constants.baseConfig + Constants.env + Constants.endpoints.test,{
        headers: 
          {
            'Authorization': 'Bearer '+this.userInfo.signInUserSession.idToken.jwtToken,
            // 'Access-Control-Allow-Methods':'GET, OPTIONS',
            // 'Access-Control-Allow-Origin':'*',
            // 'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
          }
      }
      );
  }

  getAccount(accountId: string){
    return this.http.get("assets/data/accounts/"+accountId+".json");
  }

  addAccount(newAccount: any) {
    return this.http.post("", newAccount, {
      //security token
    });
  }

  getAllTransactions(): Observable<any> {
    return this.http.get("assets/data/transactions.json");
  }
}
