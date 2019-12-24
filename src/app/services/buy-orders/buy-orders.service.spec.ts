import { TestBed } from '@angular/core/testing';

import { BuyOrdersService } from './buy-orders.service';

describe('BuyOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyOrdersService = TestBed.get(BuyOrdersService);
    expect(service).toBeTruthy();
  });
});
