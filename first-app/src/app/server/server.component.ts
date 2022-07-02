import { Component } from '@angular/core';

// component decorator is there to enhance a class
//js object tells angular what to do with this
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server created';

  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
}
