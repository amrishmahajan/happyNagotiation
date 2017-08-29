import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: '[app-sidebar]',
  templateUrl: './sidebar.component.html'

})
export class SidebarComponent {
  constructor(private router: Router) {
  }

  pageNavigation(key) {
    debugger;
    let link = ['./home', { outlets: { layout: ['usersetup'] } }];
    switch (key) {
      case 1:
        link = ['./home', { outlets: { layout: ['usersetup'] } }];
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      default:
        break;
    }

    this.router.navigate(link);
  }
}