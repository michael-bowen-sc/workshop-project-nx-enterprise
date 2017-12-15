import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TicketService } from '@tuskdesk-suite/backend';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit {
  searchTerm = new FormControl();
  assignedToUser = new FormControl();
  searchResults$: Observable<SearchResult[]>;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {}

  submit() {}
}

interface SearchResult {
  id: number;
  message: string;
  status: string;
}
