import { OrdersComponent } from './orders/orders/orders.component';
import { SellOrdersComponent } from './orders/sell-orders/sell-orders.component';
import { BuyOrdersComponent } from './orders/buy-orders/buy-orders.component';
import { UserFormComponent } from './users/user-form/user-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: { title: 'Users' }
      },
      {
        path: 'orders',
        loadChildren: 'app/pages/orders/orders.module#OrdersModule',
        data: {title: 'Orders'}
      },
      {
        path: 'transactions',
        loadChildren: 'app/pages/transactions/transactions.module#TransactionsModule',
        data: {title: 'Transactions'}
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
