import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0709Component } from './invoice0709.component';

describe('Invoice0709Component', () => {
  let component: Invoice0709Component;
  let fixture: ComponentFixture<Invoice0709Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0709Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
