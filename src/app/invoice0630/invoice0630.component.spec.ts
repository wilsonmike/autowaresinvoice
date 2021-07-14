import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0630Component } from './invoice0630.component';

describe('Invoice0630Component', () => {
  let component: Invoice0630Component;
  let fixture: ComponentFixture<Invoice0630Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0630Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
