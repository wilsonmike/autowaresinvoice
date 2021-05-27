import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0520Component } from './invoice0520.component';

describe('Invoice0520Component', () => {
  let component: Invoice0520Component;
  let fixture: ComponentFixture<Invoice0520Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0520Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
