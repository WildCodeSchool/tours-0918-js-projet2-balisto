
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowComponent } from './caroussel.component';

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
