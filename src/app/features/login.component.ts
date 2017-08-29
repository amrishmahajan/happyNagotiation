import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hn-login.component',
  templateUrl: './login.component.html'

})
export class LoginComponent {

  constructor(private router: Router) {
  }

  redirectToHome() {
     let link = ['./home', { outlets: { layout: ['usersetup'] } }];
    this.router.navigate(link);
  }
}