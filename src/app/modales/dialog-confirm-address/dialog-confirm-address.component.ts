import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-confirm-address',
  templateUrl: './dialog-confirm-address.component.html',
  styleUrls: ['./dialog-confirm-address.component.scss']
})
export class DialogConfirmAddressComponent {

  email: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.email = this.config.data.email;
  }

  close() {
    this.ref.close(DialogConfirmAddressComponent)
  }

}
