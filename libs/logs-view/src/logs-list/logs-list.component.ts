import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.scss']
})
export class LogsListComponent implements OnInit {
  logs;

  constructor() {}

  ngOnInit() {
    this.logs = [{ message: 'log one' }, { message: 'log two' }];
  }
}
