import { Component } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  name = "";

  constructor(public registrationService: RegistrationService) {}

  signUp() {
    this.registrationService.registerUser(this.name)
      .subscribe(registration => {});
  }
}
