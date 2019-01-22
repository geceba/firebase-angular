import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Heroe} from "../interfaces/heroe.interface";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL:string = "https://heroesapp-6ef9c.firebaseio.com/heroes.json"
  heroeURL:string = "https://heroesapp-6ef9c.firebaseio.com/heroes/"
  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe:Heroe) {
    let body = JSON.stringify( heroe );

    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post( this.heroesURL, body, {headers}).pipe( map(res => res));
   

  }

  actualizarHeroe(heroe:Heroe, key$:string) {
    let body = JSON.stringify( heroe );
    let url = `${this.heroeURL}/${key$}.json`;
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.put( url, body, {headers}).pipe( map(res => res));
   

  }
}
