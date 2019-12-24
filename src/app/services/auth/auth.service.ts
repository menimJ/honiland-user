import { Injectable } from '@angular/core';
import { throwError, from } from 'rxjs';
import { catchError, tap, delay } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../../core/constants/apiEndPoint';
import { LocalStorageService } from '../local-storage/local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authEndPoint: ApiEndPoints;

  constructor(
    private httpClient: HttpClient,
    private storageService: LocalStorageService
  ) {
    this.authEndPoint = new ApiEndPoints();
  }

  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // Let the app keep running by returning an empty result.
      return from(result);
    };
  }

  public signup(credential: any) {
    const newCredential = { ...credential };
    return this.httpClient.post(this.authEndPoint.API_AUTH + 'registration/', newCredential).pipe(
      tap((res: any) => {
        this.storageService.set('AUTH_DATA', res);
      }),
      catchError(err => {
        this.handleError('register', []);
        return throwError(err);
      })
    );
  }

  public signin(loginCreds: any) {
    const credentials = { ...loginCreds };
    return this.httpClient.post(this.authEndPoint.API_AUTH + 'login/', credentials).pipe(
      // tap((res: any) => this.storageService.set(AUTH_DATA, res)),
      tap((res: any) => {
        this.storageService.set('AUTH_DATA', res);
      }),
      catchError(err => {
        this.handleError('login', []);
        return throwError(err);
      }),
      delay(2000)
    );
  }

  public signout() {
    return this.httpClient.post(this.authEndPoint.API_AUTH + 'logout/', null).pipe(
      catchError(err => {
        this.handleError('login', []);
        return throwError(err);
      }),
    );
  }

  public forgotPassword(emailAddress: any) {
    return this.httpClient.post(this.authEndPoint.API_AUTH + 'password/reset/', emailAddress).pipe(
      catchError(err => {
        this.handleError('register', []);
        return throwError(err);
      })
    );
  }

  isTokenExpired(): boolean {
    return false;
  }

  // isAuthenticated(): boolean {
  //   return !!this.getToken();
  // }

  // getToken(): string {
  //   return this.storageService.get(AUTH_DATA, true).token;
  // }

  getRoles(): string[] {
    return [];
  }

  // decodeJwtToken() {
  //   const base64Url = this.getToken().split('.')[1];
  //   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //   return JSON.parse(window.atob(base64));
  // }

}
