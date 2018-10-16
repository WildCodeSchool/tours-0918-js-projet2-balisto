import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGalerieComponent } from './manage-galerie.component';

describe('ManageGalerieComponent', () => {
  let component: ManageGalerieComponent;
  let fixture: ComponentFixture<ManageGalerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGalerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
