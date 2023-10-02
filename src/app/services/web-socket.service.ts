import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$!: WebSocketSubject<any>;

  constructor() { }
  
  public getNewWebSocket(WS_ENDPOINT: string) {
    if (!this.socket$ || this.socket$.closed) {
      return webSocket(WS_ENDPOINT);
    } else { return null };
  }

  close() {
    this.socket$.complete();
  }
}
