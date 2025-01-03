import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAreaComponent } from './dialog-area.component';

describe('DialogAreaComponent', () => {
  let component: DialogAreaComponent;
  let fixture: ComponentFixture<DialogAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAreaComponent]
    });
    fixture = TestBed.createComponent(DialogAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
