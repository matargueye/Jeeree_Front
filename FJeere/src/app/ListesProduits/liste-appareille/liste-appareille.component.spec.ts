import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAppareilleComponent } from './liste-appareille.component';

describe('ListeAppareilleComponent', () => {
  let component: ListeAppareilleComponent;
  let fixture: ComponentFixture<ListeAppareilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAppareilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAppareilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
