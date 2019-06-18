import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutCanvComponent } from './doughnut-canv.component';

describe('DoughnutCanvComponent', () => {
  let component: DoughnutCanvComponent;
  let fixture: ComponentFixture<DoughnutCanvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutCanvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutCanvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
