import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireEComponent } from './accessoire-e.component';

describe('AccessoireEComponent', () => {
  let component: AccessoireEComponent;
  let fixture: ComponentFixture<AccessoireEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoireEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoireEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
