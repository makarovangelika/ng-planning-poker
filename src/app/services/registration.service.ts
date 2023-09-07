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

  token!: string;

  constructor(private http: HttpClient) { }
  registerUser(name: string): Observable<Registration> {
    return this.http.post<Registration>(`${url}/register`, {
      method: "POST",
        body: JSON.stringify({
            name: name
    })
  }).pipe(
    tap(registration => this.token = registration.token)
  )
}
}
