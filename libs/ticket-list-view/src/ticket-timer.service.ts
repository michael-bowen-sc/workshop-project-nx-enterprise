import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

  constructor() {}
}
