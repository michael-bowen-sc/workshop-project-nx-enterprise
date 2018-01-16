import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { readAll, hot } from '@nrwl/nx/testing';
import { LogsRootEffects } from './logs-root.effects';

describe('LogsRootEffects', () => {
  let actions;
  let effects: LogsRootEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [LogsRootEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(LogsRootEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      actions = hot('-a-|', { a: { type: 'LOAD_EVENT_LOGS' } });
      expect(await readAll(effects.loadData)).toEqual([{ type: 'EVENT_LOGS_LOADED', payload: {} }]);
    });
  });
});
