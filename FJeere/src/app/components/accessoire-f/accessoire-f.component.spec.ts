import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireFComponent } from './accessoire-f.component';

describe('AccessoireFComponent', () => {
  let component: AccessoireFComponent;
  let fixture: ComponentFixture<AccessoireFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoireFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoireFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
