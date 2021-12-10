import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  addAccountsForm: FormGroup = new FormGroup({
    accountId: new FormControl(''),
    name: new FormControl(''),
    accountType: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
