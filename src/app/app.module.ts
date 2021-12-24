import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import Amplify, { Auth } from 'aws-amplify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaybookComponent } from './views/daybook/daybook.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { HeaderComponent } from './layout/header/header.component';
import { AccountComponent } from './views/account/account.component';
import { ShellComponent } from './layout/shell/shell.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DataService } from './services/data.service';
import { AddAccountComponent } from './forms/add-account/add-account.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { UnauthorizedUserComponent } from './views/unauthorized-user/unauthorized-user.component';


Amplify.configure({
  Auth:{
    mandatorySignIn:true,
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_isRf5BOFQ',
    userPoolWebClientId: '12hcatgdobjmp409jqc7omoj0o',
    authenticationFlowType:'USER_PASSWORD_AUTH'
  }
});

@NgModule({
  declarations: [
    AppComponent,
    DaybookComponent,
    AccountsComponent,
    HeaderComponent,
    AccountComponent,
    ShellComponent,
    PageNotFoundComponent,
    AddAccountComponent,
    HomeComponent,
    LoginComponent,
    UnauthorizedUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
