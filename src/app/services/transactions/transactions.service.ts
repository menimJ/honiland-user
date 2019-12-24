import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  buyTransactionEndpoint: string;
  sellTransactionEndpoint: string;

  constructor(private http: HttpClient) {
    this.buyTransactionEndpoint = environment.baseUrl + 'admin_buy_orders/';
    this.sellTransactionEndpoint = environment.baseUrl + 'admin_sell_orders/';
  }

  private handleError(result?: any) {
    if (result.error instanceof ErrorEvent) {
      console.error('An error occurred:', result.error.message);
    } else {
      console.error(
        `Backend returned code ${result.status}, ` + `body was: ${result.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  getAllBuyTransactions() {
    return this.http.get(this.buyTransactionEndpoint)
      .pipe(
        catchError(err => {
          this.handleError([]);
          return throwError(err);
        })
      );
  }

  getAllSellTransactions() {
    return this.http.get(this.sellTransactionEndpoint)
      .pipe(
        catchError(err => {
          this.handleError([]);
          return throwError(err);
        })
      );
  }

}
