import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountId: string;
  data: any;
  loans: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.accountId = "";
    this.route.params.subscribe( params => {
      console.log(params);
      this.accountId = params['accountId'];
      this.data = this.route.snapshot.data['account'];
      // this.dataService.getAccount(this.accountId).subscribe(data => {
      //   this.data = data;
      //   this.loans = this.data['loans'];
      // });
    });
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then(data => {
      console.log("account - currentAuthenticatedUser", data);
    });
  }

}
