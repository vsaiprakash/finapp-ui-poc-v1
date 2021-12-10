import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAccounts():  Observable<any> {
    return this.http.get("assets/data/accounts.json");
  }

  getAccount(accountId: string){
    return this.http.get("assets/data/accounts/"+accountId+".json");
  }

  addAccount(newAccount: any) {
    return this.http.post("", newAccount, {
      //security token
    });
  }
}
