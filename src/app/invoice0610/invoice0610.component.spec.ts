import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0610Component } from './invoice0610.component';

describe('Invoice0610Component', () => {
  let component: Invoice0610Component;
  let fixture: ComponentFixture<Invoice0610Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Invoice0610Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
