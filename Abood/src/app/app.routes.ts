import {provideRouter, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignupComponent } from './signup/signup.component';
import {ApplicationConfig} from '@angular/core';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
