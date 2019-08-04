import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestChildPageComponent } from './quest-child-page.component';

describe('QuestChildPageComponent', () => {
  let component: QuestChildPageComponent;
  let fixture: ComponentFixture<QuestChildPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestChildPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
