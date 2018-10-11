import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCaseComponent } from './main-case.component';

describe('MainCaseComponent', () => {
  let component: MainCaseComponent;
  let fixture: ComponentFixture<MainCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
