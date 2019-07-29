import { RouteRoutingModule } from './route-routing.module';
import { RouteComponent } from './route.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [ RouteComponent],
  imports: [
    CommonModule,
    RouteRoutingModule
  ]
})
export class RouteModule { }
