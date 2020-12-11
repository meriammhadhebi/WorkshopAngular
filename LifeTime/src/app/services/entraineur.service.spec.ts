import { TestBed } from '@angular/core/testing';

import { EntraineurService } from './entraineur.service';

describe('EntraineurService', () => {
  let service: EntraineurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntraineurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
