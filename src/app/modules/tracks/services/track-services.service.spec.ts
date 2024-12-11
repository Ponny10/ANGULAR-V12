import { TestBed } from '@angular/core/testing';

import { TrackServices } from './track-services.service';

describe('TrackServicesService', () => {
  let service: TrackServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
