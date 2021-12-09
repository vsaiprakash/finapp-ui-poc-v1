import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'daybook',
  templateUrl: './daybook.component.html',
  styleUrls: ['./daybook.component.css']
})
export class DaybookComponent implements OnInit {

  data:any = [
    {
      date: "12/12/21",
      type: "By Borrower",
      id: "1234",
      debitIn: "",
      creditOut: "30",
      totalAmt: "70"
    },
    {
      date: "12/12/21",
      type: "To Borrower",
      id: "5678",
      debitIn: "20",
      creditOut: "",
      totalAmt: "50"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
