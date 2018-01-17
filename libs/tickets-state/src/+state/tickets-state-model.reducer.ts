import { TicketsStateModel } from './tickets-state-model.interfaces';
import { TicketsStateModelAction } from './tickets-state-model.actions';
import { ticketsStateAdapter } from '../+state/tickets-state-model.init';

export function ticketsStateModelReducer(state: TicketsStateModel, action: TicketsStateModelAction): TicketsStateModel {
  switch (action.type) {
    case 'TICKETS_LOADED': {
      return ticketsStateAdapter.addAll(action.payload, state);
    }
    case 'TICKET_LOADED': {
      return ticketsStateAdapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
