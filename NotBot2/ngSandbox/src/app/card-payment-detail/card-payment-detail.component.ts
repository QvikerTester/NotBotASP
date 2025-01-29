import { Component, OnInit } from '@angular/core';
import { CardPaymentDetail } from '../interfaces/payment-detail';
import { CardPaymentDetailService } from '../services/card-payment-detail.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card-payment-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card-payment-detail.component.html',
  styleUrl: './card-payment-detail.component.css',
})
export class CardPaymentDetailComponent implements OnInit {
  cardPaymentDetail!: CardPaymentDetail;

  constructor(private cardPaymentDetailService: CardPaymentDetailService) {}

  ngOnInit(): void {
    this.cardPaymentDetailService.getCardPaymentDetails().subscribe({
      next: (data) => (this.cardPaymentDetail = data),
      error: (err) => console.log('Error', err),
    });
  }
}
