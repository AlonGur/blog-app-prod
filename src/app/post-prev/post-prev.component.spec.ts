import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPrevComponent } from './post-prev.component';

describe('PostPrevComponent', () => {
  let component: PostPrevComponent;
  let fixture: ComponentFixture<PostPrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
