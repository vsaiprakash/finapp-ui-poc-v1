import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './views/account/account.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { DaybookComponent } from './views/daybook/daybook.component';

const routes: Routes = [
  { path: 'daybook', component: DaybookComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'account/:accountId', component: AccountComponent },
  { path: '',   redirectTo: '/accounts', pathMatch: 'full' }, // redirect to `accounts`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
