import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.component.html',
  styleUrls: ['./view-tournament.component.css']
})
export class ViewTournamentComponent implements OnInit {

  equipoArray = [{id: 1, nombre: 'Hacha y tiza FC'},
  {id: 2, nombre: 'Sportivo Barracas eSports'},
  {id: 3, nombre: 'Racing club eSports'},
  {id: 4, nombre: 'WAP eSports'},
  {id: 5, nombre: 'Queso y dulce eSports'},
  {id: 6, nombre: 'Gimnasia eSports'},
  {id: 7, nombre: 'Lanus eSports'},
  {id: 8, nombre: 'El porvenir'},
  {id: 9, nombre: 'All boys eSports'},]

  constructor() { }

  ngOnInit() {
  }

}
