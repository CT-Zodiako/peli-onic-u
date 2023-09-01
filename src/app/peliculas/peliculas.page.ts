import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PELICULAS } from '../lista-peliculas';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  // public pelicula : Pelicula={
  //   id: 1,
  //   nombre: "Matrix",
  //   genero: "scifi",
  //   director: "Pipito perez",
  //   portada: "no imagen"
  // }
  public mispeliculas = PELICULAS
  constructor() { }

  ngOnInit() {
  }

}
