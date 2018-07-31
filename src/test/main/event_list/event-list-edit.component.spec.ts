import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventListEditComponent } from 'src/app/main/event-list/event-list-edit/event-list-edit.component';

describe('EventListEditComponent', () => {
  let component: EventListEditComponent;
  let fixture: ComponentFixture<EventListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
