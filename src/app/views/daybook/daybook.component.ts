import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UtilService } from 'src/app/services/util.service';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'daybook',
  templateUrl: './daybook.component.html',
  styleUrls: ['./daybook.component.css']
})
export class DaybookComponent implements OnInit {

  daybookFilterForm: FormGroup = new FormGroup({
    transactionType: new FormControl(''),
    accountId: new FormControl('')
  });

  originalData: any;
  data:any;

  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    private utilService: UtilService) {
    // this.dataService.getAllTransactions().subscribe(data => {
    //   this.data = data;
    // });
    this.data = this.route.snapshot.data['daybook'];
    this.originalData = this.data;

    this.daybookFilterForm.valueChanges.subscribe(daybookFilter => {
      this.data = this.originalData;
      this.data = this.utilService.filterDataTable(
        this.originalData,
        [
          { "key": "transactionType", "value": daybookFilter.transactionType, "type": "select" },
          { "key": "accountId", "value": daybookFilter.accountId, "type": "text" }
        ]
      );
      console.log(this.data);
    });
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then(data => {
      console.log("daybook - currentAuthenticatedUser", data);
    });
  }

  camelToSentenceCase(inputText: string):string {
    return this.utilService.camelToSentenceCase(inputText);
  }

}
