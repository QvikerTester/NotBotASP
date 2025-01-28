import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngSandbox';
  paymentDetail: any;
  paymentId = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPaymentDetail(this.paymentId);
  }

  fetchPaymentDetail(_id: number): void {
    const url = `http://localhost:5251/api/CardPaymentDetail/${_id}`;
    this.http.get(url).subscribe({
      next: (response) => {
        this.paymentDetail = response;
        console.log('Payment Detail:', this.paymentDetail);
      },
      error: (error) => {
        console.error('Error fetching payment detail:', error);
      },
    });
  }
}
