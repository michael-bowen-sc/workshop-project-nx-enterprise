import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { TicketService } from '@tuskdesk-suite/backend';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit {
  searchText = new FormControl();
  @ViewChild('searchButton', { read: ElementRef })
  searchButton;
  searchResults$: Observable<SearchResult[]>;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.searchResults$ = Observable.fromEvent(this.searchButton.nativeElement, 'click').pipe(
      switchMap(() => this.ticketService.searchTickets(this.searchText.value)),
      map(tickets => {
        return tickets.map(ticket => {
          return { id: ticket.id, message: ticket.message, status: ticket.status };
        });
      })
    );
  }
}

interface SearchResult {
  id: number;
  message: string;
  status: string;
}
