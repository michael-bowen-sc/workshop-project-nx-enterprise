import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { LogService } from '@tuskdesk-suite/logs-backend';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class LogsRootEffects {
  @Effect()
  loadData = this.actions.ofType('LOAD_EVENT_LOGS').pipe(
    mergeMap(action =>
      this.logService.logs().pipe(
        map(logs => {
          return {
            type: 'EVENT_LOGS_LOADED',
            payload: logs
          };
        }),
        catchError(() => of(null))
      )
    )
  );

  constructor(private actions: Actions, private logService: LogService) {}
}
