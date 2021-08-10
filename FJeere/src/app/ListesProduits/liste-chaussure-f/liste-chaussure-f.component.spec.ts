import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChaussureFComponent } from './liste-chaussure-f.component';

describe('ListeChaussureFComponent', () => {
  let component: ListeChaussureFComponent;
  let fixture: ComponentFixture<ListeChaussureFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChaussureFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChaussureFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
