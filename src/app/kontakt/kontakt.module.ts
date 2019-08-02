import { KontaktComponent } from './kontakt.component';
import { KontaktRoutingModule } from './kontakt-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    KontaktComponent
  ],
  imports: [
    CommonModule,
    KontaktRoutingModule,
    FormsModule
  ]
})
export class KontaktModule { }
