import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTicketAsEntities } from '@tuskdesk-suite/tickets-state';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Ticket, TicketComment } from '@tuskdesk-suite/data-models';
import { FormControl } from '@angular/forms';
import { TicketTimerService } from '../ticket-timer.service';
import { TicketDetailsState } from '../+state/ticket-list-view-state.interface';
import { selectTicketComments } from '@tuskdesk-suite/comments-state';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketDetailsComponent implements OnInit {
  ticket$: Observable<Ticket>;
  comments$: Observable<TicketComment[]>;
  ticketMessage = new FormControl();
  timer$: Observable<number>;
  markedToWork$: Observable<boolean>;

  constructor(
    private store: Store<TicketDetailsState>,
    private route: ActivatedRoute,
    private ticketTimerService: TicketTimerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.store.dispatch({ type: 'LOAD_TICKET', payload: id });
      this.store.dispatch({ type: 'LOAD_TICKET_COMMENTS', payload: id });
      this.ticket$ = this.store.select(selectTicketAsEntities).pipe(map(tickets => tickets[id]));
      this.comments$ = this.store
        .select(selectTicketComments)
        .pipe(map(comments => comments.filter(comment => comment.ticketId === id)));

      this.markedToWork$ = this.ticketTimerService.ticketsToWork$.pipe(map(ticketIds => ticketIds.indexOf(id) >= 0));
    });
  }

  switchToEdit() {}

  cancelEdit() {}

  saveEdit() {}

  startTimer() {
    this.timer$ = this.ticketTimerService.timer$;
  }

  markToWork(ticketId: string) {
    this.ticketTimerService.addTicketIdToWork(ticketId);
  }
}
