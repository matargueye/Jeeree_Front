import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAccessoireFComponent } from './liste-accessoire-f.component';

describe('ListeAccessoireFComponent', () => {
  let component: ListeAccessoireFComponent;
  let fixture: ComponentFixture<ListeAccessoireFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAccessoireFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAccessoireFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
