import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerProduitComponent } from './creer-produit.component';

describe('CreerProduitComponent', () => {
  let component: CreerProduitComponent;
  let fixture: ComponentFixture<CreerProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
