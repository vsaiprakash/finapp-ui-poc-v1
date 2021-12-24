import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then(data => {
      console.log("home - currentAuthenticatedUser", data);
    });
  }

}
