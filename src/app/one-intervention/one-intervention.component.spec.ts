import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneInterventionComponent } from './one-intervention.component';

describe('OneInterventionComponent', () => {
  let component: OneInterventionComponent;
  let fixture: ComponentFixture<OneInterventionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneInterventionComponent]
    });
    fixture = TestBed.createComponent(OneInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
