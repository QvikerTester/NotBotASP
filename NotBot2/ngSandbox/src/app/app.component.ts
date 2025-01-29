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
export class AppComponent {}
