import { KontaktComponent } from './kontakt.component';
import { KontaktRoutingModule } from './kontakt-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    KontaktComponent
  ],
  imports: [
    CommonModule,
    KontaktRoutingModule
  ]
})
export class KontaktModule { }
