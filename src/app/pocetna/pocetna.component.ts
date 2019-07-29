import { PocetnaService } from './pocetna.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(private service : PocetnaService) { }

  vesti;
  ngOnInit() {

    this.service.dohvatiVesti().subscribe(
      Response => {
        
        this.vesti = Response;
      },
      error => {
        console.log(error);
      }
    ); 
  }

}
