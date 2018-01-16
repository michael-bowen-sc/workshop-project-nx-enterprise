import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TicketService, UserService } from '@tuskdesk-suite/backend';
import { User } from '@tuskdesk-suite/data-models';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit, OnDestroy {
  searchTerm = new FormControl();
  assignedToUser = new FormControl();
  searchResults$: Observable<SearchResult[]>;
  users: User[];
  subscription: Subscription;

  constructor(private ticketService: TicketService, private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.assignedToUser.valueChanges.subscribe(value => {
      this.userService.users(value).subscribe(users => {
        this.users = users;
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
