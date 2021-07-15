import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCLientComponent } from './modifier-client.component';

describe('ModifierCLientComponent', () => {
  let component: ModifierCLientComponent;
  let fixture: ComponentFixture<ModifierCLientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCLientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCLientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
