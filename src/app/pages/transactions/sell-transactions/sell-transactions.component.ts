import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TransactionsService } from '../../../services/transactions/transactions.service';

@Component({
  selector: 'app-sell-transactions',
  templateUrl: './sell-transactions.component.html',
  styleUrls: ['./sell-transactions.component.css']
})
export class SellTransactionsComponent implements OnInit {

  sellTransactions$ = new BehaviorSubject<any>(this.transactionService.getAllSellTransactions);

  constructor(
    private transactionService: TransactionsService) { }

  ngOnInit() {
    this.getAllSellTransactions();
  }

  getAllSellTransactions() {
    this.transactionService.getAllSellTransactions().subscribe((res: any) => {
      this.sellTransactions$.next(res);
    });
  }


}
