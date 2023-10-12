import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  public socket$!: WebSocketSubject<any> | null;

  constructor() { }
  
  public getNewWebSocket(WS_ENDPOINT: string) {
    if (!this.socket$ || this.socket$.closed) {
      return webSocket<any>(WS_ENDPOINT);
    } else { return null };
  }

  close() {
    if (this.socket$) {
      this.socket$.complete();
    }
  }
}
