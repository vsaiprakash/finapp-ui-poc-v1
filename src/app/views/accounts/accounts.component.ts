import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountsFilterForm: FormGroup = new FormGroup({
    accountId: new FormControl(''),
    name: new FormControl(''),
    accountType: new FormControl('')
  });

  originalData: any;
  data:any;

  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    private utilService: UtilService) {
    this.data = this.route.snapshot.data['accounts'];
    this.originalData = this.data;
    // this.dataService.getAccounts().subscribe(data => {
    //   this.data = data;
    // });

    this.accountsFilterForm.valueChanges.subscribe(accountsFilter => {
      this.data = this.originalData;

        this.data = this.utilService.filterDataTable(
          this.originalData,
          [
            { "key": "accountId", "value": accountsFilter.accountId , "type": "text"},
            { "key": "name", "value": accountsFilter.name , "type": "text"},
            { "key": "accountType", "value": accountsFilter.accountType , "type": "select"}
          ]
        );

      });


  }

  ngOnInit(): void {
  }

  sort1(){
    console.log("sort1");
    this.data = this.utilService.sortDataTable(this.originalData, {
      key: "name", type: "string", option: "asc"
    })
  }

}
