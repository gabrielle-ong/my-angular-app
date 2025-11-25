import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  UiInputComponent,
  UiDatePickerComponent,
  UiRadioGroupComponent,
  UiCheckboxComponent,
  UiToggleComponent,
  UiButtonComponent
} from './ui-components';

@Component({
  selector: 'app-order-delivery-form',
  standalone: true,
  imports: [
    FormsModule,
    UiInputComponent,
    UiDatePickerComponent,
    UiRadioGroupComponent,
    UiCheckboxComponent,
    UiToggleComponent,
    UiButtonComponent
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

