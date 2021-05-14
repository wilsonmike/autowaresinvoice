import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0427Component } from './invoice0427.component';

describe('Invoice0427Component', () => {
  let component: Invoice0427Component;
  let fixture: ComponentFixture<Invoice0427Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0427Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
