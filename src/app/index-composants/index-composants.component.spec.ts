import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComposantsComponent } from './index-composants.component';

describe('IndexComposantsComponent', () => {
  let component: IndexComposantsComponent;
  let fixture: ComponentFixture<IndexComposantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComposantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComposantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
