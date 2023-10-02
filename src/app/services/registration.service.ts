import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Registration } from '../models';
import { url } from './baseUrl';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registration: Registration | null = this.localStorageService.load();

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) { }
  registerUser(name: string): Observable<Registration> {
    return this.http.post<Registration>(`${url}/register`, {
      name: name
    }).pipe(
      tap(registration => {
        this.registration = registration;
        this.localStorageService.save(registration);
      })
    )
  }

  unregister() {
    this.registration = null;
  }
}
