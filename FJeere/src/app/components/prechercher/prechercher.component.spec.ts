import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrechercherComponent } from './prechercher.component';

describe('PrechercherComponent', () => {
  let component: PrechercherComponent;
  let fixture: ComponentFixture<PrechercherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrechercherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrechercherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
