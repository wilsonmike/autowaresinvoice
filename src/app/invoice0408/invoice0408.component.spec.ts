import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0408Component } from './invoice0408.component';

describe('Invoice0408Component', () => {
  let component: Invoice0408Component;
  let fixture: ComponentFixture<Invoice0408Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0408Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
