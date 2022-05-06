import { TestBed } from '@angular/core/testing';

import { EditGuardGuard } from './edit-guard.guard';

describe('EditGuardGuard', () => {
  let guard: EditGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
