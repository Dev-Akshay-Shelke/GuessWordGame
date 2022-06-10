import { AuthGuard } from './auth-guard.service';
import { ContactService } from './contact.service';
import { LoggedinService } from './logged-in.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, RegisterComponent, PlayGroundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxCaptchaModule,
    HttpClientModule,
  ],
  providers: [LoggedinService, ContactService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
