import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarToggled = true;
  showMenu1 = false;
  showMenu2=false;
  showMenu3=false;
  showMenu4=false;
  showMenu5=false;

faTimes=faTimes;
faBars=faBars;
faTachometerAlt = faTachometerAlt;
faShoppingCart = faShoppingCart;
faGem=faGem;
faChartLine=faChartLine;
faGlobe=faGlobe;
faBook=faBook;
faCalendar=faCalendar;
faFolder=faFolder;
  constructor() {
  }

  ngOnInit(): void {
  }
  toggleSidebarDropdown(menu:any) {
    if(menu==1)this.showMenu1 = !this.showMenu1;
    if(menu==2)this.showMenu2=!this.showMenu2;
    if(menu==3)this.showMenu3=!this.showMenu3;
    if(menu==4)this.showMenu4=!this.showMenu4;
    if(menu==5)this.showMenu5=!this.showMenu5;

  }

  toggleSidebar() {
    this.sidebarToggled = !this.sidebarToggled;
  }
}
