import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0Component } from './invoice0.component';

describe('Invoice0Component', () => {
  let component: Invoice0Component;
  let fixture: ComponentFixture<Invoice0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
