import { TestBed } from '@angular/core/testing';

import { LocserviceService } from './locservice.service';

describe('LocserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocserviceService = TestBed.get(LocserviceService);
    expect(service).toBeTruthy();
  });
});
