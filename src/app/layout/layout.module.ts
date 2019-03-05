import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../modules/routing/routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
  ],
  exports: [
    NavbarComponent,
    BodyComponent,
  ]
})
export class LayoutModule { }
