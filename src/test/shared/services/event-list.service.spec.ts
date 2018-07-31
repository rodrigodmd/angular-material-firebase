import { TestBed, inject } from '@angular/core/testing';
import { EventListService } from 'src/app/shared/service/event-list.service';

describe('EventListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventListService]
    });
  });

  it('should be created', inject([EventListService], (service: EventListService) => {
    expect(service).toBeTruthy();
  }));
});
