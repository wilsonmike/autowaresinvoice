import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0505Component } from './invoice0505.component';

describe('Invoice0505Component', () => {
  let component: Invoice0505Component;
  let fixture: ComponentFixture<Invoice0505Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0505Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
