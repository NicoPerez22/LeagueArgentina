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
  selectData: boolean = true;
  selectResumen: boolean = false;
  selectedTeamsArray: Array<any> = [];
  fixture: Array<any> = [];
  formatObject
  modalidadObject
  selectedFiles?: FileList;
  currentFile?: File;
  preview = '';

  arrayTeams = [
    { id: 1, name: 'Hacha y tiza eSports', logo: "assets/images/HYT-IESA.png", dt: 'NicoPerez22' },
    { id: 2, name: 'Gimnasia eSports', logo: "assets/images/GELP.png", dt: 'ElverFloresta17' },
    { id: 3, name: 'Independiente eSports', logo: "assets/images/4320.png", dt: 'rama_velez' },
    { id: 4, name: 'WAP eSports', logo: "assets/images/4320.png", dt: 'Wacho' }
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
    this.selectTeams = true;
    this.selectData = false;
    this.selectResumen = false;
  }

  onSelectResumen(){
    this.selectResumen = true;
    this.selectTeams = false;
    this.selectData = false;
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


  formatLiga(){
    //CADA FECHA TIENE LA MITAD DE PARTIDOS QUE LA CANTIDAD DE EQUIPOS QUE HAY
    const cantPartidosPorFecha = this.arrayTeams.length / 2;
    const cantFechas = this.arrayTeams.length - 1;
    var fecha: Array<any> = [];
    var fixture: Array<any> = [];
    var anterior


    for (let index = 0; index < 4; index++) {
      const random = Math.floor(Math.random() * this.arrayTeams.length);
      const element = this.arrayTeams[random];
      if(element.name == anterior){
        console.log("Repetido")
      } else {
        fecha.push(element.name + " VS " + anterior);
        console.log(fecha)
      }

      anterior = element.name
      console.log(anterior);

    }


    // this.arrayTeams.forEach((equipo) => {
    //   //Asignar un rival a cada equipo

    //   //Devuelve un array de los equipos, menos con el que se encuentra en el recorrido acutal
    //   var res = this.arrayTeams.filter(elem => elem.name !== equipo.name);

    //   res.map(elem => {
    //     var rival = {
    //       match: equipo.name + " vs " + elem.name,
    //       equipo1: equipo.name,
    //       equipo2: elem.name
    //     }
        
    //     this.fixture.push(rival);

    //     const random = Math.floor(Math.random() * this.fixture.length)
    //     const local = this.fixture[random]
    //     const visitante = this.fixture[random]
    //     const match = local.equipo1 + visitante.equipo2

    //     console.log(match)
    //     console.log(this.fixture)
    //   })


      
    // })


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

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);
      }
    }
  }
}
