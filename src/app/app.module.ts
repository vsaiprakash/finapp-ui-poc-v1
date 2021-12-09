import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaybookComponent } from './views/daybook/daybook.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { HeaderComponent } from './layout/header/header.component';
import { AccountComponent } from './views/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    DaybookComponent,
    AccountsComponent,
    HeaderComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
