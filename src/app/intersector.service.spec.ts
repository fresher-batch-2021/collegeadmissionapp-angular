import { TestBed } from '@angular/core/testing';

import { IntersectorService } from './intersector.service';

describe('IntersectorService', () => {
  let service: IntersectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntersectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
