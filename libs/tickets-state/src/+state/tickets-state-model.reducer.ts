import { TicketsStateModel } from './tickets-state-model.interfaces';
import { TicketsStateModelAction } from './tickets-state-model.actions';

export function ticketsStateModelReducer(state: TicketsStateModel, action: TicketsStateModelAction): TicketsStateModel {
  switch (action.type) {
    case 'TICKETS_LOADED': {
      const tickets = {};
      action.payload.forEach(ticket => {
        tickets[ticket.id] = { ...ticket };
      });
      return {
        ...state,
        tickets,
        ids: action.payload.map(ticket => ticket.id)
      };
    }
    case 'TICKET_LOADED': {
      return {
        ...state,
        tickets: {
          ...state.tickets,
          [action.payload.id]: { ...action.payload }
        }
      };
    }
    default: {
      return state;
    }
  }
}
