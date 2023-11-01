import { TestBed } from '@angular/core/testing';

import { AdToCartService } from './add-to-cart.service';

describe('AdToCartService', () => {
  let service: AdToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
