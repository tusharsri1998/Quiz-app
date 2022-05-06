import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuizzesComponent } from './list-quizzes.component';

describe('ListQuizzesComponent', () => {
  let component: ListQuizzesComponent;
  let fixture: ComponentFixture<ListQuizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListQuizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
