import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TransactionsService } from '../../../services/transactions/transactions.service';

@Component({
  selector: 'app-buy-transactions',
  templateUrl: './buy-transactions.component.html',
  styleUrls: ['./buy-transactions.component.css']
})
export class BuyTransactionsComponent implements OnInit {

  buyTransactions$ = new BehaviorSubject<any>(this.transactionService.getAllBuyTransactions);

  constructor(
    private transactionService: TransactionsService
  ) { }

  ngOnInit() {
    this.getAllBuyTransactions();
  }

  getAllBuyTransactions() {
    this.transactionService.getAllBuyTransactions().subscribe((res: any) => {
      // this.collectionSize = res.length;
      this.buyTransactions$.next(res);
    });
  }

}
