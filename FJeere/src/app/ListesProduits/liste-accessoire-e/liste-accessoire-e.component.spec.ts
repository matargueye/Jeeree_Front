import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAccessoireEComponent } from './liste-accessoire-e.component';

describe('ListeAccessoireEComponent', () => {
  let component: ListeAccessoireEComponent;
  let fixture: ComponentFixture<ListeAccessoireEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAccessoireEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAccessoireEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
