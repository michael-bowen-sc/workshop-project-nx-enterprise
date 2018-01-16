import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TicketService, UserService } from '@tuskdesk-suite/backend';
import { User } from '@tuskdesk-suite/data-models';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit, OnDestroy {
  searchTerm = new FormControl();
  assignedToUser = new FormControl();
  searchResults$: Observable<SearchResult[]>;
  users: string[];
  subscription: Subscription;

  constructor(private ticketService: TicketService, private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.assignedToUser.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(value => {
          if (value.length === 0) {
            this.users = [];
          }
        }),
        filter(value => value.length > 0)
      )
      .subscribe(value => {
        this.userService
          .users(value)
          .pipe(map(users => users.map(user => user.fullName)))
          .subscribe(userFullNames => {
            this.users = userFullNames;
          });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setAssignedToUser(value) {
    this.assignedToUser.patchValue(value, { emitEvent: false });
  }

  submit() {
    this.searchResults$ = this.ticketService.searchTickets(this.searchTerm.value, this.assignedToUser.value);
  }
}

interface SearchResult {
  id: number;
  message: string;
  status: string;
}
