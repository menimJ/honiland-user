import { ApiEndPoints } from './../../core/constants/apiEndPoint';
import { PlansModel } from './../../models/plans.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  plansEndPoint: ApiEndPoints;

  constructor(private http: HttpClient) {
    this.plansEndPoint = new ApiEndPoints();
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

  getPlans(): Observable<PlansModel[]> {
    return this.http.get<PlansModel[]>(this.plansEndPoint.API_PLANS).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  createPlan(plan: PlansModel) {
    return this.http.post(this.plansEndPoint.API_PLANS, plan).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  updatePlan(id: string, plan: PlansModel) {
    return this.http.put(`${this.plansEndPoint.API_PLANS}${id}/`, plan).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  getPlan(id: string) {
    return this.http.get(`${this.plansEndPoint.API_PLANS}${id}/`).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  deletePlan(id: string) {
    return this.http.delete(`${this.plansEndPoint.API_PLANS}${id}/`).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }
}
