import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, state, transition,query,stagger } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
  animations:[
    trigger("slide",[

      transition(':enter', [
        query('*', style({ opacity: 0, transform: 'translateX(-75%)' })),
        query('*', stagger('400ms', [
          animate('.3s ease-in', style({ opacity: 1, transform: 'translateX(0)'}))
          ]))
        ])
    ])

  ]
})
export class KontaktComponent implements OnInit {

  constructor() { }

  uspesno = false;

  onSubmit(form: NgForm){

    this.uspesno = true;

  }

  ngOnInit() {
  }

}
