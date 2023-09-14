import { Component, Input } from '@angular/core';
import { IRoom, ISeat } from 'src/app/models';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent {

  @Input() room!: IRoom;
  @Input() seat!: ISeat;
  @Input() active!: boolean
}
