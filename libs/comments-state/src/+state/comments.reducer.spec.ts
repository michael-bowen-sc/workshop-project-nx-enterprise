import { commentsReducer } from './comments.reducer';
import { Comments } from './comments.interfaces';
import { TicketCommentsLoaded } from './comments.actions';

describe('commentsReducer', () => {
  it('should work', () => {
    const state: Comments = { ids: [], entities: {} };
    const action: TicketCommentsLoaded = { type: 'TICKET_COMMENTS_LOADED', payload: [] };
    const actual = commentsReducer(state, action);
    expect(actual).toEqual({ ids: [], entities: {} });
  });
});
