import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsRootEffects } from './+state/logs-root.effects';

@NgModule({
  imports: [CommonModule],
  providers: [LogsRootEffects]
})
export class LogsStateModule {}
