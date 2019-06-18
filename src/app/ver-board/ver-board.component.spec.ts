import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBoardComponent } from './ver-board.component';

describe('VerBoardComponent', () => {
  let component: VerBoardComponent;
  let fixture: ComponentFixture<VerBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
