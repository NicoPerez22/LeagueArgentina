import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdministrarEquipoComponent } from '../administrar-equipo/administrar-equipo.component';
import { ReportarPartidoComponent } from '../administrar-equipo/reportar-partido/reportar-partido.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { TorneoComponent } from '../torneo/torneo.component';
import { FechasComponent } from '../torneo/fechas/fechas.component';
import { GoleadoresComponent } from '../torneo/goleadores/goleadores.component';
import { AsistenciasComponent } from '../torneo/asistencias/asistencias.component';
import { SancionesComponent } from '../torneo/sanciones/sanciones.component';
import { PlantillaComponent } from '../administrar-equipo/plantilla/plantilla.component';
import { EstadisticasEquipoComponent } from '../administrar-equipo/estadisticas-equipo/estadisticas-equipo.component';
import { CambiarlogoComponent } from '../administrar-equipo/cambiarlogo/cambiarlogo.component';
import { InvitarJugadorComponent } from '../administrar-equipo/invitar-jugador/invitar-jugador.component';
import { CrearTorneoComponent } from '../torneo/crear-torneo/crear-torneo.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'torneo',      component: TorneoComponent },
    { path: 'administrar-equipo',      component: AdministrarEquipoComponent },
    { path: 'reportar',      component: ReportarPartidoComponent },
    { path: 'login',      component: LoginComponent },
    { path: 'perfil',      component: ProfileComponent },

    //Admin Equipo
    { path: 'administrar-equipo/reportarpartido',      component: ReportarPartidoComponent },
    { path: 'administrar-equipo/plantilla',      component: PlantillaComponent },
    { path: 'administrar-equipo/estadisticas',      component: EstadisticasEquipoComponent },
    { path: 'administrar-equipo/cambiar-logo',      component: CambiarlogoComponent },
    { path: 'administrar-equipo/invitar-jugador',      component: InvitarJugadorComponent },

    //Torneo
    { path: 'torneo/fechas',      component: FechasComponent },
    { path: 'torneo/goeladores',      component: GoleadoresComponent },
    { path: 'torneo/asistencias',      component: AsistenciasComponent },
    { path: 'torneo/sanciones',      component: SancionesComponent },
    { path: 'torneo/crear-torneo',      component: CrearTorneoComponent },
];
