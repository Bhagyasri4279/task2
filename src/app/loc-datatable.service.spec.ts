import { TestBed } from '@angular/core/testing';

import { LocDatatableService } from './loc-datatable.service';

describe('LocDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocDatatableService = TestBed.get(LocDatatableService);
    expect(service).toBeTruthy();
  });
});
