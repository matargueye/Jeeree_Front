import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussureEComponent } from './chaussure-e.component';

describe('ChaussureEComponent', () => {
  let component: ChaussureEComponent;
  let fixture: ComponentFixture<ChaussureEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaussureEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussureEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
