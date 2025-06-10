import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment {
  selectedPlano: string = '';
  selectedPayment: string = '';
}
