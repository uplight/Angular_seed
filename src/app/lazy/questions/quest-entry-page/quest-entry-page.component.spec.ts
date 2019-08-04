import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestEntryPageComponent } from './quest-entry-page.component';

describe('QuestEntryPageComponent', () => {
  let component: QuestEntryPageComponent;
  let fixture: ComponentFixture<QuestEntryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestEntryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
