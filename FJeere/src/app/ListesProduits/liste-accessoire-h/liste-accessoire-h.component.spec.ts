import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAccessoireHComponent } from './liste-accessoire-h.component';

describe('ListeAccessoireHComponent', () => {
  let component: ListeAccessoireHComponent;
  let fixture: ComponentFixture<ListeAccessoireHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAccessoireHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAccessoireHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
