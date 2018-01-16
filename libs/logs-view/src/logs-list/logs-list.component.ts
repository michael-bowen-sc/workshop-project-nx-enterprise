import { Component, OnInit } from '@angular/core';
import { EventLog } from '@tuskdesk-suite/data-models';
import { Observable } from 'rxjs/Observable';
import { LogsRootState } from '@tuskdesk-suite/logs-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.scss']
})
export class LogsListComponent implements OnInit {
  logs$: Observable<EventLog[]>;

  constructor(private store: Store<LogsRootState>) {}

  ngOnInit() {
    this.store.dispatch({ type: 'LOAD_EVENT_LOGS' });
    this.logs$ = this.store.select(s => s.logsRoot.eventLogs);
  }
}
