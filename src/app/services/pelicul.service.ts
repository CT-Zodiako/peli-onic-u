import { Injectable } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PELICULAS } from '../lista-peliculas'
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculService {

  constructor() { }

  getPeliculas():Observable <Pelicula[]> {
    return of(PELICULAS);
  }

  borraPelicula(pelicula:Pelicula|number):Observable<Pelicula[]>{
    const id = typeof pelicula === 'number' ? pelicula:pelicula.id;
    if (id > -1) {
      PELICULAS.splice(id,1);
    }
    return of(PELICULAS);
  }
}
