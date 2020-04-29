import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmobilePageComponent } from './webmobile-page.component';

describe('WebmobilePageComponent', () => {
  let component: WebmobilePageComponent;
  let fixture: ComponentFixture<WebmobilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebmobilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebmobilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
