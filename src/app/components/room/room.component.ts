import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRoom, statusVoted } from 'src/app/models';
import { RegistrationService } from 'src/app/services/registration.service';
import { RoomService } from 'src/app/services/room.service';
import { map } from 'rxjs/operators';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { urlInstance } from 'src/app/services/baseUrl';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  room!: IRoom;
  id!: string;

  get statusVoted() {
    if (!this.room) {
      return false
    }
    return this.room.status === statusVoted
  }

  constructor(private registrationService: RegistrationService,
              private roomService: RoomService,
              private route: ActivatedRoute,
              private router: Router,
              private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.route.params.pipe(map(p => p['id']))
      .subscribe(id => this.id = id);
    this.roomService.getRoom(this.id || '')
      .subscribe(room => {
        this.room = room;
        urlInstance.protocol = urlInstance.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsConn = this.webSocketService.getNewWebSocket(`${urlInstance.href}rooms/${this.id}/subscribe?authorization=${this.registrationService.registration?.token}`);
        if (wsConn) {
          wsConn.subscribe({
            next: message => {
              this.room = message as IRoom;
            }
          })
        }
      });
  }

  handleResetRoom() {
    this.roomService.resetRoom(this.id || '').subscribe(room => {});
  }

  handleEndVote() {
    this.roomService.endVote(this.id || '').subscribe(room => {});
  }

  handleLeaveRoom() {
    this.roomService.leaveRoom(this.id || '')
      .subscribe(room => this.router.navigate(['/']));
  }
}
