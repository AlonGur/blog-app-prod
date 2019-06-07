import { TestBed } from '@angular/core/testing';

import { PostTitleService } from './post-title.service';

describe('PostTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostTitleService = TestBed.get(PostTitleService);
    expect(service).toBeTruthy();
  });
});
