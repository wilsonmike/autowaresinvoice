import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0525Component } from './invoice0525.component';

describe('Invoice0525Component', () => {
  let component: Invoice0525Component;
  let fixture: ComponentFixture<Invoice0525Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0525Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
