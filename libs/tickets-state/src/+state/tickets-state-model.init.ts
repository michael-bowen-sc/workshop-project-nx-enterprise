import { TicketsStateModel } from './tickets-state-model.interfaces';
import { createEntityAdapter } from '@ngrx/entity';
import { Ticket } from '@tuskdesk-suite/data-models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const ticketsStateAdapter = createEntityAdapter<Ticket>();

export const ticketsStateModelInitialState: TicketsStateModel = ticketsStateAdapter.getInitialState();

const { selectAll: selectAllTickets, selectEntities: selectTicketEntities } = ticketsStateAdapter.getSelectors();

export const selectTicketState = createFeatureSelector<TicketsStateModel>('ticketsStateModel');
export const selectTickets = createSelector(selectTicketState, selectAllTickets);
export const selectTicketAsEntities = createSelector(selectTicketState, selectTicketEntities);
