import { PocetnaRoutingModule } from './pocetna-routing.module';
import { PocetnaComponent } from './pocetna.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PocetnaComponent
  ],
  imports: [
    CommonModule,
    PocetnaRoutingModule
  ]
})
export class PocetnaModule { }
