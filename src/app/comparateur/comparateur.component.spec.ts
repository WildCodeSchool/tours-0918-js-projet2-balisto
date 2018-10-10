import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparateurComponent } from './comparateur.component';

describe('ComparateurComponent', () => {
  let component: ComparateurComponent;
  let fixture: ComponentFixture<ComparateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
