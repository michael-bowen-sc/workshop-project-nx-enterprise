import { TicketComment } from '@tuskdesk-suite/data-models';

export interface LoadTicketComments {
  type: 'LOAD_TICKET_COMMENTS';
  payload: number;
}

export interface TicketCommentsLoaded {
  type: 'TICKET_COMMENTS_LOADED';
  payload: TicketComment[];
}

export type CommentsAction = LoadTicketComments | TicketCommentsLoaded;
