import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Comments } from './comments.interfaces';
import { LoadTicketComments } from './comments.actions';
import { map } from 'rxjs/operators';
import { TicketService } from '@tuskdesk-suite/backend';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class CommentsEffects {
  @Effect()
  loadData = this.d.fetch('LOAD_TICKET_COMMENTS', {
    run: (a: LoadTicketComments, state: Comments) => {
      return this.ticketService.comments(a.payload).pipe(
        map(comments => {
          return {
            type: 'TICKET_COMMENTS_LOADED',
            payload: comments
          };
        })
      );
    },

    onError: (a: LoadTicketComments, error) => {
      return { type: 'LOAD_TICKET_COMMENTS_FAILED' };
    }
  });

  constructor(private actions: Actions, private d: DataPersistence<Comments>, private ticketService: TicketService) {}
}
