import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BuyOrdersComponent } from './buy-orders/buy-orders.component';
import { SellOrdersComponent } from './sell-orders/sell-orders.component';
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [

  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: '',
        redirectTo: 'buy-orders'
      },
      {
        path: 'buy-orders',
        component: BuyOrdersComponent
      },
      {
        path: 'sell-orders',
        component: SellOrdersComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    BuyOrdersComponent,
    SellOrdersComponent,
    OrdersComponent
  ],
})

export class OrdersModule { }


