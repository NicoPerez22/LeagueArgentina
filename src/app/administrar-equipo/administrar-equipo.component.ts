import { Component, OnInit } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-administrar-equipo',
  templateUrl: './administrar-equipo.component.html',
  styleUrls: ['./administrar-equipo.component.css']
})
export class AdministrarEquipoComponent implements OnInit {

  showInicio: boolean = true;
  showPlantilla: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  currentOrientation = 'horizontal';

  showInicioFn(){
    this.showInicio = true;
    this.showPlantilla = false;
  }
  
  showPlantillaFn(){
    this.showPlantilla = true;
    this.showInicio = false;
  }
}
