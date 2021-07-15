import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacelivreurComponent } from './espacelivreur.component';

describe('EspacelivreurComponent', () => {
  let component: EspacelivreurComponent;
  let fixture: ComponentFixture<EspacelivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacelivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacelivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
