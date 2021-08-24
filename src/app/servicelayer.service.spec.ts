import { TestBed } from '@angular/core/testing';

import { ServicelayerService } from './servicelayer.service';

describe('ServicelayerService', () => {
  let service: ServicelayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicelayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
