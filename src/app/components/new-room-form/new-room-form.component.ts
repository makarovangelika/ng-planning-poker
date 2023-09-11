import { Component } from '@angular/core';
import { Template } from '../../models';
import { OnInit } from '@angular/core';
import { CreateRoomService } from '../../services/create-room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-room-form',
  templateUrl: './new-room-form.component.html',
  styleUrls: ['./new-room-form.component.css']
})
export class NewRoomFormComponent implements OnInit {
  templates: Template[] = [];
  roomName = '';
  selectedTemplate = 0;

  constructor(public createRoomService: CreateRoomService,
              private router: Router) {}
  ngOnInit() {
    this.createRoomService.getTemplates()
      .subscribe(templates => this.templates = templates);
  }

  handleCreateRoom($event: any) {
    $event.preventDefault();
    this.createRoomService.createRoom(this.roomName, this.selectedTemplate)
      .subscribe(roomResponse => {
        this.router.navigate(['/rooms', roomResponse.id])
      })
  }


}
