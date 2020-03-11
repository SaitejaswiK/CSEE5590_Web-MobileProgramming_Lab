import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoshopPageComponent } from './photoshop-page.component';

describe('PhotoshopPageComponent', () => {
  let component: PhotoshopPageComponent;
  let fixture: ComponentFixture<PhotoshopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoshopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoshopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
