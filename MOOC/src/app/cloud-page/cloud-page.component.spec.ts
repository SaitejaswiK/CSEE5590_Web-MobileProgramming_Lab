import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudPageComponent } from './cloud-page.component';

describe('CloudPageComponent', () => {
  let component: CloudPageComponent;
  let fixture: ComponentFixture<CloudPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
