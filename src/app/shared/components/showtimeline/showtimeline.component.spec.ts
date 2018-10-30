import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimelineComponent } from './showtimeline.component';

describe('ShowtimelineComponent', () => {
  let component: ShowtimelineComponent;
  let fixture: ComponentFixture<ShowtimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
