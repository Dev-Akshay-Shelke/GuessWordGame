import { ContactService } from './../contact.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptcha2Component } from 'ngx-captcha';
interface IUser {
  name: string;
  email: string;
  recaptcha: any;
}

const EMAIL_REGEXP =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  user: IUser;
  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'dark';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type!: 'image' | 'audio';
  constructor(private router: Router, private contact: ContactService) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      recaptcha: new FormControl(this.user.email, [Validators.required]),
    });
  }

  get name() {
    return this.form.get('name')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get recaptcha() {
    return this.form.get('recaptcha')!;
  }

  public startGame(): void {
    if (this.form.invalid) {
      for (const control of Object.keys(this.form.controls)) {
        this.form.controls[control].markAsTouched();
      }
      return;
    } else {
      this.captchaElem.resetCaptcha();
      this.contact.saveNewUser({
        name: this.form.value.name,
        email: this.form.value.email,
      });
      this.router.navigate(['/playground']);
    }
    this.user = this.form.value;
  }

  handleSuccess(data: any) {
    console.log(data);
  }
}
