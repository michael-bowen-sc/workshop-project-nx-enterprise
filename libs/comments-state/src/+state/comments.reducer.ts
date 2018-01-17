import { Comments } from './comments.interfaces';
import { CommentsAction } from './comments.actions';
import { ticketCommentsAdapter } from './comments.init';

export function commentsReducer(state: Comments, action: CommentsAction): Comments {
  switch (action.type) {
    case 'TICKET_COMMENTS_LOADED': {
      return ticketCommentsAdapter.addAll(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
