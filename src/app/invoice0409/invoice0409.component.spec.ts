import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0409Component } from './invoice0409.component';

describe('Invoice0409Component', () => {
  let component: Invoice0409Component;
  let fixture: ComponentFixture<Invoice0409Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0409Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
