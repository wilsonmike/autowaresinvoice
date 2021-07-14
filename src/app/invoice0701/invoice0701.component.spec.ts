import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0701Component } from './invoice0701.component';

describe('Invoice0701Component', () => {
  let component: Invoice0701Component;
  let fixture: ComponentFixture<Invoice0701Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0701Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
