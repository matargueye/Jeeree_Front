import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetementHComponent } from './vetement-h.component';

describe('VetementHComponent', () => {
  let component: VetementHComponent;
  let fixture: ComponentFixture<VetementHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetementHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetementHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
