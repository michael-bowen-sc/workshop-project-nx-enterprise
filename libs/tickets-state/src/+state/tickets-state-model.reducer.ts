import { TicketsStateModel } from './tickets-state-model.interfaces';
import { TicketsStateModelAction } from './tickets-state-model.actions';

export function ticketsStateModelReducer(state: TicketsStateModel, action: TicketsStateModelAction): TicketsStateModel {
  switch (action.type) {
    case 'TICKETS_LOADED': {
      return { ...state, tickets: action.payload };
    }
    case 'TICKET_LOADED': {
      const tickets = [...state.tickets];
      if (!tickets.some(ticket => ticket.id === action.payload.id)) {
        tickets.push(action.payload);
      }
      return {
        ...state,
        tickets
      };
    }
    case 'TICKET_COMMENTS_LOADED': {
      return {
        ...state,
        comments: [...action.payload]
      };
    }
    case 'CLEAR_TICKET_COMMENTS': {
      return {
        ...state,
        comments: []
      };
    }
    case 'UPDATE_TICKET_MESSAGE':
    case 'UNDO_UPDATE_TICKET_MESSAGE': {
      const ticket = state.tickets.find(t => t.id === action.payload.id);
      const ticketIndex = state.tickets.indexOf(ticket);
      const tickets = [...state.tickets];
      tickets[ticketIndex] = { ...ticket, message: action.payload.message };
      return {
        ...state,
        tickets
      };
    }
    case 'TICKET_COMMENT_ADDED': {
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
