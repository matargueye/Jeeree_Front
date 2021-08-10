import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVetementComponent } from './liste-vetement.component';

describe('ListeVetementComponent', () => {
  let component: ListeVetementComponent;
  let fixture: ComponentFixture<ListeVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVetementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
