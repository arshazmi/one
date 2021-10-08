import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicbodyComponent } from './topicbody.component';

describe('TopicbodyComponent', () => {
  let component: TopicbodyComponent;
  let fixture: ComponentFixture<TopicbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
