import { TestBed } from '@angular/core/testing';

import { ApiTdService } from './api-td.service';

describe('ApiTdService', () => {
  let service: ApiTdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
