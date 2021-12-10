import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';

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

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.data = this.route.snapshot.data['accounts'];
    this.originalData = this.data;
    // this.dataService.getAccounts().subscribe(data => {
    //   this.data = data;
    // });

    this.accountsFilterForm.valueChanges.subscribe(accountsFilter => {
      this.data = this.originalData;
      // this.data = this.filterAccountsTable(
      //   this.originalData,
      //   accountsFilter.accountId, 
      //   accountsFilter.name, 
      //   accountsFilter.accountType);

        this.data = this.filterDataTable(
          this.originalData,
          [
            { "key": "accountId", "value": accountsFilter.accountId , "type": "text"},
            { "key": "name", "value": accountsFilter.name , "type": "text"},
            { "key": "accountType", "value": accountsFilter.accountType , "type": "select"}
          ]
        )
      });


  }

  ngOnInit(): void {
  }

  filterAccountsTable(originalData: any, ...args: any[]){
    let data = originalData;
    const [ accountId, name, accountType ] = args;

    if(accountId!=''){
      data = data.filter((entry: any) => {
        return (entry.accountId.includes(accountId))
      });
    }

    if(name!=''){
      data = data.filter((entry: any) => {
        return (entry.name.includes(name))
      });
    }

    if(accountType!=''){
      data = data.filter((entry: any) => {
        return entry.accountType === accountType
      });
    }

    return data;
  }

  filterDataTable(
    originalData: any,
    inputData :any[]){

    let data = originalData;

    inputData.forEach(record => {
      if(record.value!=''){
        switch(record.type) {
          case "text":
            data = data.filter((entry: any) => {
              return (entry[record.key].includes(record.value));
            });
            break;
          case "select":
            data = data.filter((entry: any) => {
              return entry[record.key] === record.value;
            });
            // code block
            break;
          default:
            // code block
        }
      }
    });

    return data;
  }
}
