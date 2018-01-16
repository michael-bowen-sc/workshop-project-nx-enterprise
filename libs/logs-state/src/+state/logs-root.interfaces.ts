import { EventLog } from '@tuskdesk-suite/data-models';

export interface LogsRoot {
  eventLogs: EventLog[];
}

export interface LogsRootState {
  readonly logsRoot: LogsRoot;
}
