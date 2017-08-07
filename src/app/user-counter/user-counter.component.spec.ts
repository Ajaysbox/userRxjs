import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCounterComponent } from './user-counter.component';

describe('UserCounterComponent', () => {
  let component: UserCounterComponent;
  let fixture: ComponentFixture<UserCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
