import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TicketTimerService {
  private _timer$ = Observable.create(observer => {
    let count = 0;
    const intervalId = setInterval(() => {
      count++;
      observer.next(count);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  get timer$() {
    return this._timer$;
  }

  private _ticketIdsToWork = [];
  private _ticketsToWork$ = new BehaviorSubject(this._ticketIdsToWork);
  get ticketsToWork$() {
    return this._ticketsToWork$;
  }

  constructor() {}

  addTicketIdToWork(id) {
    if (this._ticketIdsToWork.indexOf(id) === -1) {
      this._ticketIdsToWork.push(id);
    }
    this.ticketsToWork$.next([...this._ticketIdsToWork]);
  }
}
