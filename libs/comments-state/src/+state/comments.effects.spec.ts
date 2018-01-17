import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { readAll, hot } from '@nrwl/nx/testing';
import { CommentsEffects } from './comments.effects';

describe('CommentsEffects', () => {
  let actions;
  let effects: CommentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [CommentsEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(CommentsEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      actions = hot('-a-|', { a: { type: 'LOAD_TICKET_COMMENTS', payload: 1 } });
      expect(await readAll(effects.loadData)).toEqual([{ type: 'TICKET_COMMENTS_LOADED', payload: [] }]);
    });
  });
});
