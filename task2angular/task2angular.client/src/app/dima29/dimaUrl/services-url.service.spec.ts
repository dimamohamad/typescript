import { TestBed } from '@angular/core/testing';

import { ServicesUrlService } from './services-url.service';

describe('ServicesUrlService', () => {
  let service: ServicesUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
