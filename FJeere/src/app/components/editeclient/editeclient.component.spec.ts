import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeclientComponent } from './editeclient.component';

describe('EditeclientComponent', () => {
  let component: EditeclientComponent;
  let fixture: ComponentFixture<EditeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
