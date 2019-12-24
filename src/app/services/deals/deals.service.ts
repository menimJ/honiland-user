import { ApiEndPoints } from "../../core/constants/apiEndPoint";
import { Injectable } from "@angular/core";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { DealsModel } from "../../models/deals.model";

@Injectable({
  providedIn: "root"
})
export class DealsService {
  dealsEndpoint: ApiEndPoints;

  constructor(private http: HttpClient) {
    this.dealsEndpoint = new ApiEndPoints();
  }

  private handleError(result?: any) {
    if (result.error instanceof ErrorEvent) {
      console.error("An error occurred:", result.error.message);
    } else {
      console.error(
        `Backend returned code ${result.status}, ` + `body was: ${result.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  getDeals(): Observable<DealsModel[]> {
    return this.http.get<DealsModel[]>(this.dealsEndpoint.API_DEALS).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  getDealById(id: string): Observable<DealsModel> {
    return this.http
      .get<DealsModel>(`${this.dealsEndpoint.API_DEALS}${id}/`)
      .pipe(
        catchError(err => {
          this.handleError([]);
          return throwError(err);
        })
      );
  }

  createDeal(deal: DealsModel) {
    return this.http.post(this.dealsEndpoint.API_DEALS, deal).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  updateDeal(id: string, deal: DealsModel) {
    return this.http.put(`${this.dealsEndpoint.API_DEALS}${id}/`, deal).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  deleteDeal(id: string) {
    return this.http.delete(`${this.dealsEndpoint.API_DEALS}${id}/`).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }
}
