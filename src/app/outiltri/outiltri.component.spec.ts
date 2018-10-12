import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutiltriComponent } from './outiltri.component';

describe('OutiltriComponent', () => {
  let component: OutiltriComponent;
  let fixture: ComponentFixture<OutiltriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutiltriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutiltriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
