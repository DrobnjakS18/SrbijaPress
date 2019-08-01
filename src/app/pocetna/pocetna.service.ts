import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PocetnaService {

  constructor(private service: HttpClient) { }

  dohvatiVesti() {
    var vesti = this.service.get("http://localhost:4200/assets/json/vesti.json");
    return vesti;
  }
}
