import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCarouselComponent } from './manage-carousel.component';

describe('ManageCarouselComponent', () => {
  let component: ManageCarouselComponent;
  let fixture: ComponentFixture<ManageCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
