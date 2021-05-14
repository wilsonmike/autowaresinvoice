import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0402Component } from './invoice0402.component';

describe('Invoice0402Component', () => {
  let component: Invoice0402Component;
  let fixture: ComponentFixture<Invoice0402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0402Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
