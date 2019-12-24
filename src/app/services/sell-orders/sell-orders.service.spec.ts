import { TestBed } from '@angular/core/testing';

import { SellOrdersService } from './sell-orders.service';

describe('SellOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellOrdersService = TestBed.get(SellOrdersService);
    expect(service).toBeTruthy();
  });
});
