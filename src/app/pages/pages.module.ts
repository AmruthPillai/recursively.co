import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { ProgramOverviewComponent } from './home/program-overview/program-overview.component';
import { TechStackComponent } from './home/tech-stack/tech-stack.component';

import { SubscribeComponent } from './home/subscribe/subscribe.component';

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    ProgramOverviewComponent,
    TechStackComponent,
    SubscribeComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
