import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { LogsBackendModule } from '@tuskdesk-suite/logs-backend';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { logsRootReducer, logsRootInitialState, LogsRootEffects } from '@tuskdesk-suite/logs-state';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([{ path: '', loadChildren: '@tuskdesk-suite/logs-view#LogsViewModule' }], {
      initialNavigation: 'enabled'
    }),
    LogsBackendModule,
    StoreModule.forRoot({ logsRoot: logsRootReducer }, { initialState: { logsRoot: logsRootInitialState } }),
    EffectsModule.forRoot([LogsRootEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
