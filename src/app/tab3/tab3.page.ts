import { Component, OnInit } from '@angular/core';
import { GENEROS } from './lista-generos';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  // public pelicula : Pelicula={
  //   id: 1,
  //   nombre: "Matrix",
  //   genero: "scifi",
  //   director: "Pipito perez",
  //   portada: "no imagen"
  // }
  public misgeneros = GENEROS
  constructor() { }

  ngOnInit() {
  }

}