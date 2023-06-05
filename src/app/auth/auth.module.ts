import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';




@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    SignPageComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
