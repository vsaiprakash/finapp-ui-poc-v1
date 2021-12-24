import { TestBed } from '@angular/core/testing';

import { DaybookResolver } from './daybook.resolver';

describe('DaybookResolver', () => {
  let resolver: DaybookResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DaybookResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
