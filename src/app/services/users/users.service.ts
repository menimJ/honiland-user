import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../../models/users.model';
import { catchError } from 'rxjs/operators';
import { ApiEndPoints } from '../../core/constants/apiEndPoint';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersEndpoint: ApiEndPoints;

  constructor(private http: HttpClient) {
    this.usersEndpoint = new ApiEndPoints();
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

  getUsers(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(this.usersEndpoint.API_USERS).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  getUsersById(id: string): Observable<UsersModel> {
    return this.http
      .get<UsersModel>(`${this.usersEndpoint.API_USERS}/${id}/`)
      .pipe(
        catchError(err => {
          this.handleError([]);
          return throwError(err);
        })
      );
  }

  createUsers(users: UsersModel) {
    return this.http.post(this.usersEndpoint.API_USERS, users).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  updateUsers(id: string, users: UsersModel) {
    return this.http.put(`${this.usersEndpoint.API_USERS}/${id}/`, users).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.usersEndpoint.API_USERS}/${id}/`).pipe(
      catchError(err => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }
}
