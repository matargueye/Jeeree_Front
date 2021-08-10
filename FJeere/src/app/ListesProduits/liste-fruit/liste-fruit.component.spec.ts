import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFruitComponent } from './liste-fruit.component';

describe('ListeFruitComponent', () => {
  let component: ListeFruitComponent;
  let fixture: ComponentFixture<ListeFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFruitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
