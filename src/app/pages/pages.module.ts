import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { ProgramOverviewComponent } from './home/program-overview/program-overview.component';

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    ProgramOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
