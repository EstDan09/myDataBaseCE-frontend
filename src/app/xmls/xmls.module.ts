import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XmlsRoutingModule } from './xmls-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    XmlsRoutingModule,
    MaterialModule
  ]
})
export class XmlsModule { }
