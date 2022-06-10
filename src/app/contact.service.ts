import { LoggedinService } from './logged-in.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import './../assets/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(
    private http: HttpClient,
    private loggedInService: LoggedinService
  ) {}

  saveNewUser(value: any) {
    sessionStorage.setItem('currentUser', JSON.stringify(value));
    this.loggedInService.login();
  }

  PostMessage() {
    const jsonStringObj: any = sessionStorage.getItem('currentUser');
    const user = JSON.parse(jsonStringObj);

    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'dev.akshayshelke@gmail.com',
      Password: '40F6D5F619443F536D17DCDDD4E7A714D43D',
      To: `${user?.email}`,
      From: `dev.akshayshelke@gmail.com`,
      Subject: 'Word Guessing Game',
      Body: `
      <i>Hi ${user?.name}, Your are the winner for today's game. Keep Learning new word everyday.</i>  `,
    }).then((message: any) => {
      console.log('🚀 message', message);
    });
  }
}
