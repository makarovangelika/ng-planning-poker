import { Component, Input } from '@angular/core';
import { Vote } from 'src/app/models';

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
}
