import { logsRootReducer } from './logs-root.reducer';
import { LogsRoot } from './logs-root.interfaces';
import { EventLogsLoaded } from './logs-root.actions';

describe('logsRootReducer', () => {
  it('should work', () => {
    const state: LogsRoot = { eventLogs: [] };
    const action: EventLogsLoaded = { type: 'EVENT_LOGS_LOADED', payload: [] };
    const actual = logsRootReducer(state, action);
    expect(actual).toEqual({ eventLogs: [] });
  });
});
