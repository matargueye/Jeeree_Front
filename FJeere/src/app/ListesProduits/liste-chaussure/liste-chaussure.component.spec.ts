import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChaussureComponent } from './liste-chaussure.component';

describe('ListeChaussureComponent', () => {
  let component: ListeChaussureComponent;
  let fixture: ComponentFixture<ListeChaussureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChaussureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChaussureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
