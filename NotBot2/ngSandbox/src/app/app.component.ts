import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPaymentDetailComponent } from './card-payment-detail/card-payment-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardPaymentDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'ngSandbox';
  // paymentDetail: any;
  // paymentId = 1;
  // constructor(private http: HttpClient) {}
  // ngOnInit(): void {
  //   this.fetchPaymentDetail(this.paymentId);
  // }
  // fetchPaymentDetail(_id: number): void {
  //   const url = `http://localhost:5251/api/CardPaymentDetail/${_id}`;
  //   this.http.get(url).subscribe({
  //     next: (response) => {
  //       this.paymentDetail = response;
  //       console.log('Payment Detail:', this.paymentDetail);
  //       console.log('response', response);
  //     },
  //     error: (error) => {
  //       console.log('Error fetching payment detail:', error);
  //     },
  //   });
  // }
}
