import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../config/constants';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  // headers.append('Authorization', 'Bearer ');

  constructor(private http: HttpClient, private utils: UtilService) { }

  getAccounts():  Observable<any> {
    // return this.http.get("assets/data/accounts.json");
    return this.http.get(
      Constants.baseConfig + Constants.env + Constants.endpoints.getAccounts(),
      // {
      //   headers: this.utils.getAuthHeader()
      // }
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
