import { TestBed } from '@angular/core/testing';

import { PemasokService } from './pemasok.service';

describe('PemasokService', () => {
  let service: PemasokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemasokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
