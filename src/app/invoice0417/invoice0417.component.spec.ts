import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0417Component } from './invoice0417.component';

describe('Invoice0417Component', () => {
  let component: Invoice0417Component;
  let fixture: ComponentFixture<Invoice0417Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0417Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
