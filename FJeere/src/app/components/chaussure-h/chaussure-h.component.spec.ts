import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussureHComponent } from './chaussure-h.component';

describe('ChaussureHComponent', () => {
  let component: ChaussureHComponent;
  let fixture: ComponentFixture<ChaussureHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaussureHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussureHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
