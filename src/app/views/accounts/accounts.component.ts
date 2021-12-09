import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  data:any;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.data = this.route.snapshot.data['accounts'];
    // this.dataService.getAccounts().subscribe(data => {
    //   this.data = data;
    // });
  }

  ngOnInit(): void {
  }

}
