import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TransactionsComponent } from './transactions/transactions.component';
import { BuyTransactionsComponent } from './buy-transactions/buy-transactions.component';
import { SellTransactionsComponent } from './sell-transactions/sell-transactions.component';

const routes: Routes = [
    {
        path: '',
        component: TransactionsComponent,
        children: [
            {
                path: '',
                redirectTo: 'buy-transactions'
            },
            {
                path: 'buy-transactions',
                component: BuyTransactionsComponent
            },
            {
                path: 'sell-transactions',
                component: SellTransactionsComponent
            }
        ]
    }

];

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
        TransactionsComponent,
        BuyTransactionsComponent,
        SellTransactionsComponent
    ]
})

export class TransactionsModule { }
