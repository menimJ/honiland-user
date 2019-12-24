import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { AuthService } from '../../pages/authentication/services/auth.service';
import { UtilService } from '../../services/util/util.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private utilService: UtilService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.utilService.showLoader();
    if (!this.auth.isTokenExpired() && this.auth.isAuthenticated()) {
      request = this.addToken(request, this.auth.getToken());
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('HttpResponse >>>', event);
        } else if (event instanceof HttpErrorResponse) {
          console.log('HttpErrorResponse >>>', event);
        }
        return event;
      }),
      finalize(() => this.utilService.hideLoader())
    );
  }

  private addToken(request: HttpRequest<any>, token: any) {
    return request.clone({
      setHeaders: {
        // Authorization: `Bearer ${token}`
        Authorization: `JWT ${token}`
      }
    });
  }
}
