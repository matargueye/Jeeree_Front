import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetementEComponent } from './vetement-e.component';

describe('VetementEComponent', () => {
  let component: VetementEComponent;
  let fixture: ComponentFixture<VetementEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetementEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetementEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
