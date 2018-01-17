import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TicketsStateModelState } from '@tuskdesk-suite/tickets-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Ticket } from '@tuskdesk-suite/data-models';
import { map } from 'rxjs/operators';
import { TicketTimerService } from '../ticket-timer.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketListComponent implements OnInit {
  tickets$: Observable<Ticket[]>;
  ticketsToWork$: Observable<number>;

  constructor(private store: Store<TicketsStateModelState>, private ticketTimerService: TicketTimerService) {}

  ngOnInit() {
    this.tickets$ = this.store
      .select(s => s.ticketsStateModel)
      .pipe(
        map(model => model.ids.map(id => model.tickets[id])),
        map(tickets => tickets.filter(ticket => ticket.status === 'open'))
      );

    this.ticketsToWork$ = this.ticketTimerService.ticketsToWork$.pipe(map(ticketIds => ticketIds.length));
  }
}
