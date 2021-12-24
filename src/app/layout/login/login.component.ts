import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: [''],
    password: ['']
  });


  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private user: UserManagementService) {
  }

  ngOnInit(): void {
  }

  async login(){
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    await this.user.loginWithCognito(username, password, 'home');
  }

  // async loginWithCognito() {
  //   const username = this.loginForm.get('username')?.value;
  //   const password = this.loginForm.get('password')?.value;
  //   console.log(username, password);
  //       try {
  //         var user = await Auth.signIn(username, password);
  //         console.log('Authentication performed for user=' + username + 'password=' + password+ ' login result==' + user);
  //         var tokens = user.signInUserSession;
  //         if (tokens != null) {
  //           console.log('User authenticated');
  //           this.router.navigate(['home']);
  //           alert('You are logged in successfully !');
  //         }
  //         else {
  //           console.log("tokens are null !!!");
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         alert('User Authentication failed');
  //       }
  //     }
}
