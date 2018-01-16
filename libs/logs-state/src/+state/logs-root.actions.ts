import { EventLog } from '@tuskdesk-suite/data-models';

export interface LoadEventLogs {
  type: 'LOAD_EVENT_LOGS';
}

export interface EventLogsLoaded {
  type: 'EVENT_LOGS_LOADED';
  payload: EventLog[];
}

export type LogsRootAction = LoadEventLogs | EventLogsLoaded;
