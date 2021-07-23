import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireHComponent } from './accessoire-h.component';

describe('AccessoireHComponent', () => {
  let component: AccessoireHComponent;
  let fixture: ComponentFixture<AccessoireHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoireHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoireHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
