import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './forms/add-account/add-account.component';
import { LoginComponent } from './layout/login/login.component';
import { ShellComponent } from './layout/shell/shell.component';
import { AccountResolver } from './services/account.resolver';
import { AccountsResolver } from './services/accounts.resolver';
import { DaybookResolver } from './services/daybook.resolver';
import { AccountComponent } from './views/account/account.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { DaybookComponent } from './views/daybook/daybook.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: ShellComponent,
    children: [
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'daybook', resolve: { daybook: DaybookResolver }, component: DaybookComponent },
      { path: 'accounts', resolve: { accounts: AccountsResolver }, component: AccountsComponent },
      { path: 'account/:accountId', resolve: { account: AccountResolver }, component: AccountComponent },
      { path: 'add-account', component: AddAccountComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
