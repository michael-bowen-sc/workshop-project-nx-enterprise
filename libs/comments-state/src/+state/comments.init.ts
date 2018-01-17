import { Comments } from './comments.interfaces';
import { createEntityAdapter } from '@ngrx/entity';
import { TicketComment } from '@tuskdesk-suite/data-models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const ticketCommentsAdapter = createEntityAdapter<TicketComment>();

export const commentsInitialState: Comments = ticketCommentsAdapter.getInitialState();

const { selectAll: selectComments } = ticketCommentsAdapter.getSelectors();

export const selectTicketCommentsState = createFeatureSelector<Comments>('comments');
export const selectTicketComments = createSelector(selectTicketCommentsState, selectComments);
