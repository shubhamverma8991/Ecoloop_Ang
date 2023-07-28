import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio-images',
  templateUrl: './portfolio-images.component.html',
  styleUrls: ['./portfolio-images.component.css'],
})
export class PortfolioImagesComponent implements OnInit {
  faArrowLeft=faArrowLeft
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const routeParam = params.get('type');
      if (routeParam == 'industry') {
        console.log('industry');
      } else if (routeParam == 'building') {
        console.log('building');
      } else if (routeParam == 'service') {
        console.log('service');
      }
    });
  }
}
