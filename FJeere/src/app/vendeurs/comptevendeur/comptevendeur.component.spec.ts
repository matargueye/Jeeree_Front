import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptevendeurComponent } from './comptevendeur.component';

describe('ComptevendeurComponent', () => {
  let component: ComptevendeurComponent;
  let fixture: ComponentFixture<ComptevendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptevendeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptevendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
