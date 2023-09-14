import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRoom, statusVoted } from 'src/app/models';
import { RegistrationService } from 'src/app/services/registration.service';
import { RoomService } from 'src/app/services/room.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  room!: IRoom;
  id!: string;
  statusVoted = this.room.status === statusVoted;

  constructor(private registrationService: RegistrationService,
              private roomService: RoomService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.pipe(map(p => p['id']))
      .subscribe(id => this.id = id);
    this.roomService.getRoom(this.id || '')
      .subscribe(room => this.room = room);
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
