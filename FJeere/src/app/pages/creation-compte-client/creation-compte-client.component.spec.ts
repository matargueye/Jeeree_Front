import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCompteClientComponent } from './creation-compte-client.component';

describe('CreationCompteClientComponent', () => {
  let component: CreationCompteClientComponent;
  let fixture: ComponentFixture<CreationCompteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationCompteClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationCompteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
