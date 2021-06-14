import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0605Component } from './invoice0605.component';

describe('Invoice0605Component', () => {
  let component: Invoice0605Component;
  let fixture: ComponentFixture<Invoice0605Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0605Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
