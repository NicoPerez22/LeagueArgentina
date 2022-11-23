import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent implements OnInit {

  equipoArray = [{id: 1, nombre: 'Hacha y tiza FC'},
  {id: 2, nombre: 'Sportivo Barracas eSports'},
  {id: 3, nombre: 'Racing club eSports'},
  {id: 4, nombre: 'WAP eSports'},
  {id: 5, nombre: 'Queso y dulce eSports'},
  {id: 6, nombre: 'Gimnasia eSports'},
  {id: 7, nombre: 'Lanus eSports'},
  {id: 8, nombre: 'El porvenir'},
  {id: 9, nombre: 'All boys eSports'},]
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTorneo(){
    this.router.navigateByUrl('torneo/ver-torneo')
  }

}
