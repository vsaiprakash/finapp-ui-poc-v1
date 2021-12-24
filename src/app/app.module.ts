import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaybookComponent } from './views/daybook/daybook.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { HeaderComponent } from './layout/header/header.component';
import { AccountComponent } from './views/account/account.component';
import { ShellComponent } from './layout/shell/shell.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DataService } from './services/data.service';
import { AccountResolver } from './services/account.resolver';
import { AddAccountComponent } from './forms/add-account/add-account.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './layout/login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    AccountResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
