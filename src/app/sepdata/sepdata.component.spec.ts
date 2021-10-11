import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepdataComponent } from './sepdata.component';

describe('SepdataComponent', () => {
  let component: SepdataComponent;
  let fixture: ComponentFixture<SepdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
