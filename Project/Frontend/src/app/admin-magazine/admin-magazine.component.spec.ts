import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminMagazineComponent } from './admin-magazine.component';

describe('AdminMagazineComponent', () => {
  let component: AdminMagazineComponent;
  let fixture: ComponentFixture<AdminMagazineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
