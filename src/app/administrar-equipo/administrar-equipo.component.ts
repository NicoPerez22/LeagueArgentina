import { Component, OnInit } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-administrar-equipo',
  templateUrl: './administrar-equipo.component.html',
  styleUrls: ['./administrar-equipo.component.css']
})
export class AdministrarEquipoComponent implements OnInit {

  showInicio: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  currentOrientation = 'horizontal';

  showInicioFn(){
    this.showInicio = false
  }
  
}
