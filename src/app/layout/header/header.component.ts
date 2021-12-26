import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public user: UserManagementService) { }

  ngOnInit(): void {
  }

  logout(){
    this.user.logoutWithCognito();
  }

}
