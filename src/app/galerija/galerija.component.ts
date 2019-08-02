import { GalerijaService } from './galerija.service';
import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, transition,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.css'],
  animations:[
    trigger("fade",[

      transition(':enter', [
        query('*', style({ opacity: 0, transform: 'translateY(-15%)' })),
        query('*', stagger('300ms', [
          animate('.3s ease-in', style({ opacity: 1, transform: 'translateY(0)'}))
          ]))
        ])
    ])

  ]
})
export class GalerijaComponent implements OnInit {

  constructor(private service : GalerijaService) { }


    


  galerija;
  ngOnInit() {

    this.service.dohvatiGaleriju().subscribe(
      Response => {
        
        this.galerija = Response;
      },
      error => {
        console.log(error);
      }
    ); 
  }

}

