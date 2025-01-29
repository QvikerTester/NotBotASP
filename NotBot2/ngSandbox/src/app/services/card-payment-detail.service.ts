import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardPaymentDetail } from '../interfaces/payment-detail';

@Injectable({
  providedIn: 'root',
})
export class CardPaymentDetailService {
  private apiUrl = `http://localhost:5251/api/CardPaymentDetail`;

  constructor(private http: HttpClient) {}

  getCardPaymentDetails(id: number): Observable<CardPaymentDetail> {
    return this.http.get<CardPaymentDetail>(`${this.apiUrl}/${id}`);
  }
}
