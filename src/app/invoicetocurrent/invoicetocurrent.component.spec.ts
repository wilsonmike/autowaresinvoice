import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicetocurrentComponent } from './invoicetocurrent.component';

describe('InvoicetocurrentComponent', () => {
  let component: InvoicetocurrentComponent;
  let fixture: ComponentFixture<InvoicetocurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicetocurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicetocurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
