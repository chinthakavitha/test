import { TestBed } from '@angular/core/testing';

import { AtthGuard } from './atth.guard';

describe('AtthGuard', () => {
  let guard: AtthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AtthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
