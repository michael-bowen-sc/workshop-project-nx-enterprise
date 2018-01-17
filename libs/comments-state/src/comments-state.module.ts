import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { commentsReducer } from './+state/comments.reducer';
import { commentsInitialState } from './+state/comments.init';
import { CommentsEffects } from './+state/comments.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('comments', commentsReducer, { initialState: commentsInitialState }),
    EffectsModule.forFeature([CommentsEffects])
  ],
  providers: [CommentsEffects]
})
export class CommentsStateModule {}
