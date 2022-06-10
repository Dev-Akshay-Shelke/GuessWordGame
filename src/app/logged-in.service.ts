import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoggedinService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();

  constructor(private router: Router) {}

  login(): Observable<boolean> {
    this.isLoggedIn.next(true);
    return this.isLoggedIn$;
  }
  getUserStatus() {
    this.isLoggedIn$.subscribe((result) => {
      return result;
    });
  }

  logout(): Observable<boolean> {
    this.isLoggedIn.next(false);
    return this.isLoggedIn$;
  }
}
