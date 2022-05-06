import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginQuizComponent } from './begin-quiz.component';

describe('BeginQuizComponent', () => {
  let component: BeginQuizComponent;
  let fixture: ComponentFixture<BeginQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
