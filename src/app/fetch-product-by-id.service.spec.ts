import { TestBed } from '@angular/core/testing';

import { FetchProductByIdService } from './fetch-product-by-id.service';

describe('FetchProductByIdService', () => {
  let service: FetchProductByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProductByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
