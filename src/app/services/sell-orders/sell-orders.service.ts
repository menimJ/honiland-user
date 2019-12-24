import { SellOrderModel } from './../../models/sell-orders.model';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { ApiEndPoints } from '../../core/constants/apiEndPoint';


@Injectable({
  providedIn: 'root'
})
export class SellOrdersService {
  sellOrderEndpoint: ApiEndPoints;

  constructor(private http: HttpClient) {
    this.sellOrderEndpoint = new ApiEndPoints();
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

  getSellOrders(): Observable<SellOrderModel []> {
    return this.http.get<SellOrderModel[]>(this.sellOrderEndpoint.SELL_ORDERS).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }
}
