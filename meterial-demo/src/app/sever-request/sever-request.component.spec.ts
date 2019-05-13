import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverRequestComponent } from './sever-request.component';

describe('SeverRequestComponent', () => {
  let component: SeverRequestComponent;
  let fixture: ComponentFixture<SeverRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
