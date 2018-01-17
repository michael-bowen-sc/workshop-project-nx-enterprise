import { EntityState } from '@ngrx/entity';
import { TicketComment } from '@tuskdesk-suite/data-models';

export interface Comments extends EntityState<TicketComment> {}

export interface CommentsState {
  readonly comments: Comments;
}
