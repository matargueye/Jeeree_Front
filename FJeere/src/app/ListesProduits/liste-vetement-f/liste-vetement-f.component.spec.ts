import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVetementFComponent } from './liste-vetement-f.component';

describe('ListeVetementFComponent', () => {
  let component: ListeVetementFComponent;
  let fixture: ComponentFixture<ListeVetementFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVetementFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVetementFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
