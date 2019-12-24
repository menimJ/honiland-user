import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { throwError, from } from 'rxjs';
import { catchError, tap, delay } from 'rxjs/operators';
import { AUTH_DATA } from '../../../core/constants/stored-data.constant';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authEndpoint: string;
  constructor(private storageService: LocalStorageService, private http: HttpClient, private router: Router) {
    this.authEndpoint = environment.baseUrl + 'rest-auth/';
  }

  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // Let the app keep running by returning an empty result.
      return from(result);
    };
  }

  signout() {
    this.storageService.clear(AUTH_DATA);
    this.router.navigate(['/auth/login']);
  }

  signin(loginCreds: any) {
    const credentials = { ...loginCreds };
    return this.http.post(this.authEndpoint + 'login/', credentials).pipe(
      tap((res: any) => this.storageService.set(AUTH_DATA, res)),
      catchError(err => {
        this.handleError('login', []);
        return throwError(err);
      }),
      delay(2000)
    );
  }

  private signup(credential: any) {
    const newCredential = { ...credential };
    return this.http.post(this.authEndpoint + 'registration/', newCredential).pipe(
      catchError(err => {
        this.handleError('register', []);
        return throwError(err);
      })
    );
  }

  private updatePassword(updatePassword: any) {
    return this.http.post(this.authEndpoint + 'updatePassword', updatePassword).pipe(
      catchError(err => {
        this.handleError('resent-email', []);
        return throwError(err);
      })
    );
  }

  private resetPassword(credential: any) {
    const newCredential = { ...credential };
    return this.http.post(this.authEndpoint + 'password/reset/', newCredential).pipe(
      catchError(err => {
        this.handleError('reset-password', []);
        return throwError(err);
      })
    );
  }

  isTokenExpired(): boolean {
    return false;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string {
    return this.storageService.get(AUTH_DATA, true).token;
  }

  getRoles(): string[] {
    return [];
  }

  decodeJwtToken() {
    const base64Url = this.getToken().split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }
}
