import { Component, Input } from '@angular/core';
import { IRoom, ISeat, statusVoted } from 'src/app/models';
import { CreateRoomService } from '../../services/create-room.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent {

  @Input() room!: IRoom;
  @Input() seat!: ISeat;
  @Input() active!: boolean

  get statusVoted() {
    if (!this.room) {
      return false
    }
    return this.room.status === statusVoted
  }

  constructor(public createRoomService: CreateRoomService) {}
}
