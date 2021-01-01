import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootcheckingpageComponent } from './rootcheckingpage.component';

describe('RootcheckingpageComponent', () => {
  let component: RootcheckingpageComponent;
  let fixture: ComponentFixture<RootcheckingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootcheckingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootcheckingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
