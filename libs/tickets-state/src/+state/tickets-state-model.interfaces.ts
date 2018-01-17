import { Ticket } from '@tuskdesk-suite/data-models';

export interface TicketsStateModel {
  tickets: { [key: number]: Ticket };
  ids: number[];
}

export interface TicketsStateModelState {
  readonly ticketsStateModel: TicketsStateModel;
}
