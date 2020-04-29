import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdataPageComponent } from './bigdata-page.component';

describe('BigdataPageComponent', () => {
  let component: BigdataPageComponent;
  let fixture: ComponentFixture<BigdataPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigdataPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigdataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
