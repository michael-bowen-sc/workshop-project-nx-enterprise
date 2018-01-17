import { TicketsStateModelState } from '@tuskdesk-suite/tickets-state';
import { CommentsState } from '@tuskdesk-suite/comments-state';

export interface TicketDetailsState {
  tickets: TicketsStateModelState;
  comments: CommentsState;
}
