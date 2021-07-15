import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilleComponent } from './appareille.component';

describe('AppareilleComponent', () => {
  let component: AppareilleComponent;
  let fixture: ComponentFixture<AppareilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
