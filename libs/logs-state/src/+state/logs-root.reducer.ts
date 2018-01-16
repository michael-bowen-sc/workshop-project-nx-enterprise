import { LogsRoot } from './logs-root.interfaces';
import { LogsRootAction } from './logs-root.actions';

export function logsRootReducer(state: LogsRoot, action: LogsRootAction): LogsRoot {
  switch (action.type) {
    case 'EVENT_LOGS_LOADED': {
      return {
        ...state,
        eventLogs: [...action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
