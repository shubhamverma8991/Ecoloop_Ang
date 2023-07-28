import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';
import { ContactUsComponent } from './MyComponent/contact-us/contact-us.component';
import { CareerComponent } from './MyComponent/career/career.component';
import { SiteResourcesComponent } from './MyComponent/site-resources/site-resources.component';
import { PortfolioImagesComponent } from './MyComponent/portfolio-images/portfolio-images.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'resources',
    component: SiteResourcesComponent,
  },
  {
    path: 'image/:type',
    component: PortfolioImagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
