import { TestBed } from '@angular/core/testing';

import { SpelListServiceService } from './spel-list-service.service';

describe('SpelListServiceService', () => {
  let service: SpelListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpelListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
