import { LoggedinService } from './logged-in.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wordGuessingGame';
  isLoggedIn!: boolean;

  constructor(
    private router: Router,
    private loggedInService: LoggedinService
  ) {
    this.loggedInService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  exitUser() {
    this.loggedInService.logout();
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
