import { TestBed } from '@angular/core/testing';

import { FactFetchService } from './fact-fetch-service';

describe('FactFetchService', () => {
  let service: FactFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
