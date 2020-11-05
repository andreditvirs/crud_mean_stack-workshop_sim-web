import { TestBed } from '@angular/core/testing';

import { JajananService } from './jajanan.service';

describe('JajananService', () => {
  let service: JajananService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JajananService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
