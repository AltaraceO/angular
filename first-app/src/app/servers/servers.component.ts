import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //*can also just be a template with the HTML written directly in here
  // template: '<p>THis will also work</p>',
  //*  to use MULTILINE HTML use the back ticks ``
  styleUrls: ['./servers.component.sass'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
