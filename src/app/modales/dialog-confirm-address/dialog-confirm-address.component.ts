import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-confirm-address',
  templateUrl: './dialog-confirm-address.component.html',
  styleUrls: ['./dialog-confirm-address.component.scss']
})
export class DialogConfirmAddressComponent {

  address: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.address = this.config.data.address.user.address;
  }


  close() {
    this.ref.close(DialogConfirmAddressComponent)
  }

}
