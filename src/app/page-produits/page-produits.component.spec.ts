import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProduitsComponent } from './page-produits.component';

describe('PageProduitsComponent', () => {
  let component: PageProduitsComponent;
  let fixture: ComponentFixture<PageProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
