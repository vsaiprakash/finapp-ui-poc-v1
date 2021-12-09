import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AccountResolver implements Resolve<boolean> {

  constructor(private dataService: DataService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const accountId = route.paramMap.get('accountId')??''; //?? is ternary operator with itself as true
    return this.dataService.getAccount(accountId);
  }
}
