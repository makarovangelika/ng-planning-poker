import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { RoomComponent } from './components/room/room.component';
import { NewRoomFormComponent } from './components/new-room-form/new-room-form.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'rooms/:id', component: RoomComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoomComponent,
    NewRoomFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
