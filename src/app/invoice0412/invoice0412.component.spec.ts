import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0412Component } from './invoice0412.component';

describe('Invoice0412Component', () => {
  let component: Invoice0412Component;
  let fixture: ComponentFixture<Invoice0412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0412Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
