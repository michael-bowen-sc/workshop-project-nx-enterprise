import { Ticket } from '@tuskdesk-suite/data-models';
import { EntityState } from '@ngrx/entity';

export interface TicketsStateModel extends EntityState<Ticket> {}

export interface TicketsStateModelState {
  readonly ticketsStateModel: TicketsStateModel;
}
