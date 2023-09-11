import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './baseUrl';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Template, Vote, IRoom } from '../models';

interface TemplatesResponse {
  templates: Template[]
}

@Injectable({
  providedIn: 'root'
})
export class CreateRoomService {

  constructor(private http: HttpClient) { }

  getTemplates():Observable<Template[]> {
    return this.http.get<TemplatesResponse>(`${url}/rooms/templates`)
      .pipe(
        map(templateResponse => templateResponse.templates)
      )
  }

  createRoom(name: string, voteTemplate: number): Observable<IRoom> {
    return this.http.post<IRoom>(`${url}/rooms`, {
      name: name,
      voteTemplate: voteTemplate
    })
  }

  voteToString(vote: Vote) {
    switch(vote.type) {
        case 'value':
            return vote.value.toString();
        case 'unknown':
            return '?';
        case 'infinity':
            return  '∞';
        case 'break':
            return '☕';
        default:
            return;
    }
  }

  templateToString(template: Template) {
    const stringVotes = template.votes.map(vote => {
        return this.voteToString(vote);
    }).join(', ');
    return `${template.title} ( ${stringVotes} )`;
  }
}
