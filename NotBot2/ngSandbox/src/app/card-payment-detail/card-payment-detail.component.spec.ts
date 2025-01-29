import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaymentDetailComponent } from './card-payment-detail.component';

describe('CardPaymentDetailComponent', () => {
  let component: CardPaymentDetailComponent;
  let fixture: ComponentFixture<CardPaymentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPaymentDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPaymentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
