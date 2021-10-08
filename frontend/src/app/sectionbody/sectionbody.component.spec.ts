import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionbodyComponent } from './sectionbody.component';

describe('SectionbodyComponent', () => {
  let component: SectionbodyComponent;
  let fixture: ComponentFixture<SectionbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
