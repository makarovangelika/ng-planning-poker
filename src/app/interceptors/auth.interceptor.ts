import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';

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
    return next.handle(request);
  }
}
