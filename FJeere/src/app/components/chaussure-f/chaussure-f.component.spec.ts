import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussureFComponent } from './chaussure-f.component';

describe('ChaussureFComponent', () => {
  let component: ChaussureFComponent;
  let fixture: ComponentFixture<ChaussureFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaussureFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussureFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
