import { Component, Input } from '@angular/core';
import { Vote } from 'src/app/models';
import { CreateRoomService } from 'src/app/services/create-room.service';
import { VoteService } from 'src/app/services/vote.service';

interface IVote {
  vote: Vote,
  active: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() disabled!: boolean;
  @Input() vote!: IVote;
  @Input() value!: number;
  @Input() id!: string;

  constructor(private voteService: VoteService,
              public createRoomService: CreateRoomService) {}

  handleVote() {
    if (!this.disabled) {
      this.voteService.voteRequest(this.id || '', this.value)
        .subscribe(voteResponse => {});
    }
  }
}
