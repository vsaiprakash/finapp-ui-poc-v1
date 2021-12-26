import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagementService } from '../user-management.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  userInfo: any;
  constructor(private user: UserManagementService, private router: Router){
    this.user.getUserInfo().subscribe(user => this.userInfo = user);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const requiresLogin = route.data['requiresLogin'] || false;
      if (requiresLogin) {
        // Check that the user is logged in...
        if(this.userInfo!=null) {
          this.router.navigate(['/home']);
          return true;
        }
        else {
          this.router.navigate(['/login']);
          return false;
        }
      }
      else {
        return false;
      }
  }
}
