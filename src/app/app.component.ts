import { Component } from '@angular/core';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-planning-poker';

  constructor(public registrationService: RegistrationService) {}
}
