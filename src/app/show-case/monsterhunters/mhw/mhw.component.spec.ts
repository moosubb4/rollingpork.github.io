import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhwComponent } from './mhw.component';

describe('MhwComponent', () => {
  let component: MhwComponent;
  let fixture: ComponentFixture<MhwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
