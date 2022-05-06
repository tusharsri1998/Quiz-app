import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginFormComponent } from './admin-login-form.component';

describe('AdminLoginFormComponent', () => {
  let component: AdminLoginFormComponent;
  let fixture: ComponentFixture<AdminLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
