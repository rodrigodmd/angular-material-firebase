import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventListDetailComponent } from 'src/app/main/event-list/event-list-detail/event-list-detail.component';

describe('EventListDetailComponent', () => {
  let component: EventListDetailComponent;
  let fixture: ComponentFixture<EventListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
