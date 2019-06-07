import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrevComponent } from './admin-prev.component';

describe('AdminPrevComponent', () => {
  let component: AdminPrevComponent;
  let fixture: ComponentFixture<AdminPrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
