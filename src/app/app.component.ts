import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finapp-ui-poc-v1';
  loading: boolean;

  constructor(private router: Router){
    this.loading = false;
    router.events.subscribe((routerEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: any){
    if(routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if(routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
        this.loading = false;
    }
  }
}
