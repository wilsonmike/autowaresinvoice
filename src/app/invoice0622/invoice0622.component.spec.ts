import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0622Component } from './invoice0622.component';

describe('Invoice0622Component', () => {
  let component: Invoice0622Component;
  let fixture: ComponentFixture<Invoice0622Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0622Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
