import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChaussureEComponent } from './liste-chaussure-e.component';

describe('ListeChaussureEComponent', () => {
  let component: ListeChaussureEComponent;
  let fixture: ComponentFixture<ListeChaussureEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChaussureEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChaussureEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
