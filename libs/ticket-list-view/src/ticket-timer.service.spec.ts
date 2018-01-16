import { TestBed, inject } from '@angular/core/testing';

import { TicketTimerService } from './ticket-timer.service';

describe('TicketTimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketTimerService]
    });
  });

  it(
    'should be created',
    inject([TicketTimerService], (service: TicketTimerService) => {
      expect(service).toBeTruthy();
    })
  );
});
