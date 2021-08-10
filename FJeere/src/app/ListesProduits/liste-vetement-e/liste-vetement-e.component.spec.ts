import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVetementEComponent } from './liste-vetement-e.component';

describe('ListeVetementEComponent', () => {
  let component: ListeVetementEComponent;
  let fixture: ComponentFixture<ListeVetementEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVetementEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVetementEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
