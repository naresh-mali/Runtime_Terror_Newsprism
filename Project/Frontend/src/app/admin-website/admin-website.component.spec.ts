import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminWebsiteComponent } from './admin-website.component';

describe('AdminWebsiteComponent', () => {
  let component: AdminWebsiteComponent;
  let fixture: ComponentFixture<AdminWebsiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
