import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptelivreurComponent } from './comptelivreur.component';

describe('ComptelivreurComponent', () => {
  let component: ComptelivreurComponent;
  let fixture: ComponentFixture<ComptelivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptelivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptelivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
