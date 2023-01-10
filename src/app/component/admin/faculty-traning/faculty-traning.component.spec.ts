import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTraningComponent } from './faculty-traning.component';

describe('FacultyTraningComponent', () => {
  let component: FacultyTraningComponent;
  let fixture: ComponentFixture<FacultyTraningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyTraningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
