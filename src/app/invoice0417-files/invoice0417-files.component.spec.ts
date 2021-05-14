import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice0417FilesComponent } from './invoice0417-files.component';

describe('Invoice0417FilesComponent', () => {
  let component: Invoice0417FilesComponent;
  let fixture: ComponentFixture<Invoice0417FilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice0417FilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice0417FilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
