import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RoomComponent } from './components/room/room.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'rooms/:id', component: RoomComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
