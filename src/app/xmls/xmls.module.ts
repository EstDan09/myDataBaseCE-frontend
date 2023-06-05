import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XmlsRoutingModule } from './xmls-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    XmlsRoutingModule
  ]
})
export class XmlsModule { }
