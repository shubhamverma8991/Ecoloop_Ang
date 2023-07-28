import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioImagesComponent } from './portfolio-images.component';

describe('PortfolioImagesComponent', () => {
  let component: PortfolioImagesComponent;
  let fixture: ComponentFixture<PortfolioImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
