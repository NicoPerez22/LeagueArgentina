import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AdministrarEquipoComponent } from './administrar-equipo/administrar-equipo.component';
import { ReportarPartidoComponent } from './administrar-equipo/reportar-partido/reportar-partido.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Shell/navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TorneoComponent } from './torneo/torneo.component';
import { FooterComponent } from './Shell/footer/footer.component';
import { FechasComponent } from './torneo/fechas/fechas.component';
import { GoleadoresComponent } from './torneo/goleadores/goleadores.component';
import { AsistenciasComponent } from './torneo/asistencias/asistencias.component';
import { SancionesComponent } from './torneo/sanciones/sanciones.component';
import { PlantillaComponent } from './administrar-equipo/plantilla/plantilla.component';
import { EstadisticasEquipoComponent } from './administrar-equipo/estadisticas-equipo/estadisticas-equipo.component';
import { CambiarlogoComponent } from './administrar-equipo/cambiarlogo/cambiarlogo.component';
import { InvitarJugadorComponent } from './administrar-equipo/invitar-jugador/invitar-jugador.component';
import { CrearTorneoComponent } from './torneo/crear-torneo/crear-torneo.component';
import { ViewTournamentComponent } from './torneo/view-tournament/view-tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministrarEquipoComponent,
    ReportarPartidoComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    TorneoComponent,
    FooterComponent,
    FechasComponent,
    GoleadoresComponent,
    AsistenciasComponent,
    SancionesComponent,
    PlantillaComponent,
    EstadisticasEquipoComponent,
    CambiarlogoComponent,
    InvitarJugadorComponent,
    CrearTorneoComponent,
    ViewTournamentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
