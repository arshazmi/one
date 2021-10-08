import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicheadComponent } from './topichead.component';

describe('TopicheadComponent', () => {
  let component: TopicheadComponent;
  let fixture: ComponentFixture<TopicheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
