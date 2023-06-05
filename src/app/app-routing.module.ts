import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'xmls',
    loadChildren: () =>import('./xmls/xmls.module').then( m => m.XmlsModule ),
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'404'
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
