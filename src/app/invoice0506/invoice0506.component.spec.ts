import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0506Component } from './invoice0506.component';

describe('Invoice0506Component', () => {
  let component: Invoice0506Component;
  let fixture: ComponentFixture<Invoice0506Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0506Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
