# NgPlanningPoker
This web application allows to use planning poker for estimating of tasks' complexity during the work on the project.\
The API for the project is [here](https://github.com/violarium/poplan).\
This project was built to practice working with **Angular** and **TypeScript**. It also uses **WebSocket** to allow real-time changes.\
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.
## Features
The starting page shows the registration form

![Registration page](readme/registration-page.png)
or the form for creating new room for the voting if the user is logged in.

![Page with the form for creating new room](readme/create-room-form.png)
When the room is created, the user is redirected to the room page. Following the link of the room page any user can join the voting in this room. Players pick the cards and can see only their own cards.

![Room page](readme/room-page.png)
The owner of the room (the person who created it) can reveal the cards at any moment. When the cards are revealed the picking cards is unavailable.

![Room with revealed cards](readme/revealed-cards.png)

The owner of the room also can reset the room which reset the votes to start a new voting.
## Technologies
During the development of this project these technologies were used:
* Angular 16.2.3
* TypeScript 5.1.3
* WebSocket
* Tailwindcss 3.3.3
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.