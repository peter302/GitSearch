import { TestBed } from '@angular/core/testing';

import { SearchedService } from './searched.service';

describe('SearchedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchedService = TestBed.get(SearchedService);
    expect(service).toBeTruthy();
  });
});
