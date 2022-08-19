import { TestBed } from '@angular/core/testing';

import { BookedFlightsService } from './booked-flights.service';

describe('BookedFlightsService', () => {
  let service: BookedFlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookedFlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
