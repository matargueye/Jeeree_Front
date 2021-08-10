import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLegumeComponent } from './liste-legume.component';

describe('ListeLegumeComponent', () => {
  let component: ListeLegumeComponent;
  let fixture: ComponentFixture<ListeLegumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLegumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLegumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
