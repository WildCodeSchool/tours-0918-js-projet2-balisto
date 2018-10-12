import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetriComponent } from './pagetri.component';

describe('PagetriComponent', () => {
  let component: PagetriComponent;
  let fixture: ComponentFixture<PagetriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
