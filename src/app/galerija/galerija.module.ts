import { GalerijaRoutingModule } from './galerija-routing.module';
import { GalerijaComponent } from './galerija.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    GalerijaComponent
  ],
  imports: [
    CommonModule,
    GalerijaRoutingModule
  ]
})
export class GalerijaModule { }
