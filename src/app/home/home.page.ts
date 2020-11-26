import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  peliculas = [/*
    {
      titulo: "MAtrix",
      ano: 1999,
      director:"Hermanas Wachosky",
      imagen:"https://cdn.shopify.com/s/files/1/1416/8662/products/the_matrix_1999_bus_stop_original_film_art_1200x.jpg?v=1593122645"
    },
    {
      titulo: "28 Days Later",
      ano: 2003,
      director:"Dany Boyle",
      imagen:"https://images-na.ssl-images-amazon.com/images/I/51iVSo1II5L._AC_SY450_.jpg"
    }
  */];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas =>{
      this.peliculas = peliculas;
    });
    //this.peliculasService.getPeliculas();
  }

}
