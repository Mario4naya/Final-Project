import { TestBed } from '@angular/core/testing';

import { ApiPService } from './api-p.service';

describe('ApiPService', () => {
  let service: ApiPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
