import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  email: any;
  username: any;
  password: any;

  constructor(private fb: FormBuilder) {
    this.username = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  loginWithCognito() {

  }
}
