import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';

const routes: Routes = [
  {
    path: '', //localhost:4200/auth/
    component: LayoutPageComponent,
    children: [
      {path: 'login', component: LoginPageComponent},
      {path: 'sign', component: SignPageComponent},
      {path: '**', redirectTo: 'login'}
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
  exports: [
    RouterModule
]
})
export class AuthRoutingModule { }