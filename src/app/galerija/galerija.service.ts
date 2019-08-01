import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalerijaService {

  constructor(private service : HttpClient) { }


  dohvatiGaleriju() {
 var galerija = this.service.get("http://localhost:4200/assets/json/galerija.json");
 return galerija;

  }

}
