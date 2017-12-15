import { Ticket, TicketComment } from '@tuskdesk-suite/data-models';

export interface TicketsStateModel {
  tickets: Ticket[];
  comments: TicketComment[];
}

export interface TicketsStateModelState {
  readonly ticketsStateModel: TicketsStateModel;
}
