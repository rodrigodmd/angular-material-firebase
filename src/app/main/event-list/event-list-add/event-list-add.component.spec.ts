import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListAddComponent } from './event-list-add.component';

describe('EventListAddComponent', () => {
  let component: EventListAddComponent;
  let fixture: ComponentFixture<EventListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
