import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminAdvertiseComponent } from './admin-advertise.component';

describe('AdminAdvertiseComponent', () => {
  let component: AdminAdvertiseComponent;
  let fixture: ComponentFixture<AdminAdvertiseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
