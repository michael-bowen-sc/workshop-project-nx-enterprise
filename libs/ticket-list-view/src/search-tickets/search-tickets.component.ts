import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TicketService, UserService } from '@tuskdesk-suite/backend';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit {
  searchTerm = new FormControl();
  assignedToUser = new FormControl();
  searchResults$: Observable<SearchResult[]>;
  submitClick$ = new Subject();
  users$: Observable<string[]>;

  constructor(private ticketService: TicketService, private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.assignedToUser.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value.length > 0),
      switchMap(value => {
        return this.userService.users(value).pipe(map(users => users.map(user => user.fullName)));
      })
    );

    this.searchResults$ = this.submitClick$.pipe(
      switchMap(() => this.ticketService.searchTickets(this.searchTerm.value, this.assignedToUser.value))
    );
  }

  setAssignedToUser(value) {
    this.assignedToUser.patchValue(value, { emitEvent: false });
  }
}

interface SearchResult {
  id: number;
  message: string;
  status: string;
}
