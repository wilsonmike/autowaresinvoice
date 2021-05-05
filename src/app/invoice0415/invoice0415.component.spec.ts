import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0415Component } from './invoice0415.component';

describe('Invoice0415Component', () => {
  let component: Invoice0415Component;
  let fixture: ComponentFixture<Invoice0415Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0415Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
