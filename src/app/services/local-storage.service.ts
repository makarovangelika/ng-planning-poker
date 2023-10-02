import { Injectable } from '@angular/core';
import { Registration } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  load() {
    const serialisedState = localStorage.getItem('registration');
    if (serialisedState === null) {
      return  null;
    }
    return JSON.parse(serialisedState);
  }

  save(state: Registration | null) {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('registration', serialisedState);
  }
}
