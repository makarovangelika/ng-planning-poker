import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Registration } from '../models';
import { url } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registration!: Registration;

  constructor(private http: HttpClient) { }
  registerUser(name: string): Observable<Registration> {
    return this.http.post<Registration>(`${url}/register`, {
      name: name
    }).pipe(
      tap(registration => {
        this.registration = registration;
      })
    )
  }
}
