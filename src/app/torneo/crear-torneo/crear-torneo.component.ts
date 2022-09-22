import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-torneo',
  templateUrl: './crear-torneo.component.html',
  styleUrls: ['./crear-torneo.component.css']
})
export class CrearTorneoComponent implements OnInit {

  formCreateTournament
  selectTeams: boolean = false;
  selectedTeamsArray: Array<any> = [];
  formatObject
  modalidadObject

  arrayTeams = [
    { id: 1, name: 'Hacha y tiza eSports', logo: "assets/images/HYT-IESA.png", dt: 'NicoPerez22' },
    { id: 2, name: 'Gimnasia eSports', logo: "assets/images/GELP.png", dt: 'ElverFloresta17' },
    { id: 3, name: 'Independiente eSports', logo: "assets/images/4320.png", dt: 'rama_velez' }
  ]

  arrayModalidad = [
    { id: 1, name: 'Clubes pro 11 VS 11'},
    { id: 2, name: 'Individual 1 VS 1'},
  ]

  arrayFormat = [
    { id: 1, name: 'Eliminacion Directa'},
    { id: 2, name: 'Fase grupo + Eliminacion Directa'},
    { id: 3, name: 'Liga'},
    { id: 3, name: 'Liga + Reducido'}
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createFormTournament();
  }

  onContinue(){
    this.selectTeams = true
  }

  onSubmit(){
    const res = this.prepareSaveTournament();
    console.log(res)
  }

  onSelectTeams(value){
    let teamObject = this.arrayTeams.find(elem => elem.id == value);
    this.selectedTeamsArray.push(teamObject);
  }

  onSelectFormat(value){
    this.formatObject = this.arrayFormat.find(elem => elem.id == value);
  }

  onSelectModalidad(value){
    this.modalidadObject = this.arrayModalidad.find(elem => elem.id == value);
  }

  prepareSaveTournament(){
    const formValue = this.formCreateTournament.value
    const saveForm = {
      name: formValue.name,
      format: this.formatObject,
      cantTeams: formValue.cantTeams,
      modalidad: this.modalidadObject,
      teams: this.selectedTeamsArray
    }

    return saveForm;
  }

  createFormTournament(){
    this.formCreateTournament = this.fb.group({
      name: [''],
      cantTeams: ['']
    })
  }
}
