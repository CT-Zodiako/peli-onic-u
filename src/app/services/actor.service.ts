import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actor } from '../actor';
import { ACTORES } from '../lista-actores';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  getActoresPorPelicula(id_pelicula: number): Observable<Actor[]> | undefined{
    id_pelicula = Number(id_pelicula);
    return of(ACTORES.filter(x => x.id_pelicula === id_pelicula));
  }
}
