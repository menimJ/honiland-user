import { StatisticsModel } from './../../models/statistics.model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ApiEndPoints } from '../../core/constants/apiEndPoint';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  statisticsEndPoint = new ApiEndPoints();
  constructor(private http: HttpClient) {

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

  getStatistics(): Observable<StatisticsModel []> {
    return this.http.get<StatisticsModel[]>(this.statisticsEndPoint.STATISTICS).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }
}
