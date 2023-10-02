import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: RegistrationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.auth.registration) {
      request = request.clone({
        setHeaders: {
          "Authorization": this.auth.registration.token
        }
      })
    }
    return next.handle(request).pipe(
      tap({
        next: (event) => {},
        error: error => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            this.auth.unregister();
            window.location.href = "/";
          }
        }
      })
    )
  }
}
