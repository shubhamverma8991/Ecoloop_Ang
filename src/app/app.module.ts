import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './MyComponent/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './MyComponent/about-us/about-us.component';
import { LogoComponent } from './MyComponent/logo/logo.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { ContactUsComponent } from './MyComponent/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from "ngx-toastr";
import { FooterComponent } from './MyComponent/footer/footer.component';
import { TeamComponent } from './MyComponent/team/team.component';
import { CareerComponent } from './MyComponent/career/career.component';
import { SiteResourcesComponent } from './MyComponent/site-resources/site-resources.component';
import { PortfolioComponent } from './MyComponent/portfolio/portfolio.component';
import { PortfolioImagesComponent } from './MyComponent/portfolio-images/portfolio-images.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutUsComponent,
    LogoComponent,
    HomeComponent,
    ContactUsComponent,
    FooterComponent,
    TeamComponent,
    CareerComponent,
    SiteResourcesComponent,
    PortfolioComponent,
    PortfolioImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FontAwesomeModule, FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
