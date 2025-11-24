import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-delivery-form',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './order-delivery-form.html',
  styleUrl: './order-delivery-form.css'
})
export class OrderDeliveryFormComponent {
  deliveryDate: Date | null = null;
  customerName: string = '';
  phoneNumber: string = '';
  deliveryAddress: string = '';
  deliveryTime: string = 'anytime';
  paymentMethod: string = 'card';
  specialInstructions: string[] = [];
  leaveAtDoorway: boolean = false;
  requireSignature: boolean = false;
  fragileItems: boolean = false;
  giftWrap: boolean = false;
}

