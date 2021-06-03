import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitSelecteComponent } from './produit-selecte.component';

describe('ProduitSelecteComponent', () => {
  let component: ProduitSelecteComponent;
  let fixture: ComponentFixture<ProduitSelecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitSelecteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitSelecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
