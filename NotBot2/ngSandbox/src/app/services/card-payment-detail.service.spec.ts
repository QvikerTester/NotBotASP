import { TestBed } from '@angular/core/testing';

import { CardPaymentDetailService } from './card-payment-detail.service';

describe('CardPaymentDetailService', () => {
  let service: CardPaymentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardPaymentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
