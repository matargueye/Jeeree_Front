import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetementFComponent } from './vetement-f.component';

describe('VetementFComponent', () => {
  let component: VetementFComponent;
  let fixture: ComponentFixture<VetementFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetementFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetementFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
