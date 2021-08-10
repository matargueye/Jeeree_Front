import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAccessoireComponent } from './liste-accessoire.component';

describe('ListeAccessoireComponent', () => {
  let component: ListeAccessoireComponent;
  let fixture: ComponentFixture<ListeAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAccessoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
