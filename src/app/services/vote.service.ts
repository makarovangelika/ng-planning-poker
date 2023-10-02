import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VoteResponse } from '../models';
import { Observable } from 'rxjs';
import { url } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  voteRequest(id: string, value: number): Observable<VoteResponse> {
    return this.http.post<VoteResponse>(`${url}/rooms/${id}/vote`, {
      value: value
    })
  }
}
