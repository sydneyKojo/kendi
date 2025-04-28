import { TestBed } from '@angular/core/testing';

import { DevotionalsService } from './devotionals.service';

describe('DevotionalsService', () => {
  let service: DevotionalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevotionalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
