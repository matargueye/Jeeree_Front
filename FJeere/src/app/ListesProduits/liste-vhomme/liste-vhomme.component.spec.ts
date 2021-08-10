import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVhommeComponent } from './liste-vhomme.component';

describe('ListeVhommeComponent', () => {
  let component: ListeVhommeComponent;
  let fixture: ComponentFixture<ListeVhommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVhommeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVhommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
