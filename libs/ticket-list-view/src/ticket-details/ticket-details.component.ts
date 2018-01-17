import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketsStateModelState } from '@tuskdesk-suite/tickets-state';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Ticket, TicketComment } from '@tuskdesk-suite/data-models';
import { FormControl } from '@angular/forms';
import { TicketTimerService } from '../ticket-timer.service';

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
    private store: Store<TicketsStateModelState>,
    private route: ActivatedRoute,
    private ticketTimerService: TicketTimerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.store.dispatch({ type: 'LOAD_TICKET', payload: id });
      this.ticket$ = this.store.select(s => s.ticketsStateModel.tickets).pipe(map(tickets => tickets[id]));

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
