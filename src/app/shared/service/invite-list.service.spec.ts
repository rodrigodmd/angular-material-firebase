import { TestBed, inject } from '@angular/core/testing';

import { InviteListService } from './invite-list.service';

describe('InviteListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InviteListService]
    });
  });

  it('should be created', inject([InviteListService], (service: InviteListService) => {
    expect(service).toBeTruthy();
  }));
});
