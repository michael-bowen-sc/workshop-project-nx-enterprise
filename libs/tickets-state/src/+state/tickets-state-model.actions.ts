import { Ticket, TicketComment } from '@tuskdesk-suite/data-models';

export interface LoadTickets {
  type: 'LOAD_TICKETS';
}

export interface TicketsLoaded {
  type: 'TICKETS_LOADED';
  payload: Ticket[];
}

export interface LoadTicket {
  type: 'LOAD_TICKET';
  payload: number;
}

export interface TicketLoaded {
  type: 'TICKET_LOADED';
  payload: Ticket;
}

export interface LoadTicketComments {
  type: 'LOAD_TICKET_COMMENTS';
  payload: number;
}

export interface TicketCommentsLoaded {
  type: 'TICKET_COMMENTS_LOADED';
  payload: TicketComment[];
}

export interface ClearTicketComments {
  type: 'CLEAR_TICKET_COMMENTS';
}

export interface AddTicketComment {
  type: 'ADD_TICKET_COMMENT';
  payload: { id: number; message: string };
}

export interface TicketCommentAdded {
  type: 'TICKET_COMMENT_ADDED';
  payload: TicketComment;
}

export interface UpdateTicketMessage {
  type: 'UPDATE_TICKET_MESSAGE';
  payload: { id: number; message: string; originalMessage: string };
}

export interface UndoUpdateTicketMessage {
  type: 'UNDO_UPDATE_TICKET_MESSAGE';
  payload: { id: number; message: string };
}

export type TicketsStateModelAction =
  | LoadTickets
  | TicketsLoaded
  | LoadTicket
  | TicketLoaded
  | LoadTicketComments
  | TicketCommentsLoaded
  | ClearTicketComments
  | AddTicketComment
  | TicketCommentAdded
  | UpdateTicketMessage
  | UndoUpdateTicketMessage;
