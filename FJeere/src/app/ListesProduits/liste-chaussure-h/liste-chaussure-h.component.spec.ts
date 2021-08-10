import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChaussureHComponent } from './liste-chaussure-h.component';

describe('ListeChaussureHComponent', () => {
  let component: ListeChaussureHComponent;
  let fixture: ComponentFixture<ListeChaussureHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChaussureHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChaussureHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
