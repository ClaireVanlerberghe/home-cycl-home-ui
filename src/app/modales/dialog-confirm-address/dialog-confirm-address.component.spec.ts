import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmAddressComponent } from './dialog-confirm-address.component';

describe('DialogConfirmAddressComponent', () => {
  let component: DialogConfirmAddressComponent;
  let fixture: ComponentFixture<DialogConfirmAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConfirmAddressComponent]
    });
    fixture = TestBed.createComponent(DialogConfirmAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
