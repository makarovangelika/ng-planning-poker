import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoom } from '../models';
import { url } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getRoom(id: string): Observable<IRoom> {
    return this.http.get<IRoom>(`${url}/rooms/${id}`)
  }

  endVote(id: string): Observable<IRoom> {
    return this.http.post<IRoom>(`${url}/rooms/${id}/end`, {});
  }

  resetRoom(id: string):Observable<IRoom> {
    return this.http.post<IRoom>(`${url}/rooms/${id}/reset`, {});
  }
  
  leaveRoom(id: string):Observable<IRoom> {
    return this.http.post<IRoom>(`${url}/rooms/${id}/leave`, {});
  }
}
