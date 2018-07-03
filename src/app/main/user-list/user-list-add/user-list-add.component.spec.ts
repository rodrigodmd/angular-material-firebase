import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListAddComponent } from './user-list-add.component';

describe('UserListAddComponent', () => {
  let component: UserListAddComponent;
  let fixture: ComponentFixture<UserListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
