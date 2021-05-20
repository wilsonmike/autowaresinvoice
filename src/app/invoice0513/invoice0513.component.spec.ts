import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0513Component } from './invoice0513.component';

describe('Invoice0513Component', () => {
  let component: Invoice0513Component;
  let fixture: ComponentFixture<Invoice0513Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0513Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
