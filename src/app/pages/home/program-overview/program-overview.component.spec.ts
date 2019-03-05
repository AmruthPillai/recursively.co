import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramOverviewComponent } from './program-overview.component';

describe('ProgramOverviewComponent', () => {
  let component: ProgramOverviewComponent;
  let fixture: ComponentFixture<ProgramOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
