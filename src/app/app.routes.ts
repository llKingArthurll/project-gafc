import { Routes } from '@angular/router';
import { SolicitudesIngresarComponent } from './private/solicitudes-ingresar/solicitudes-ingresar.component';
import { SolicitudesEliminadosComponent } from './private/solicitudes-eliminados/solicitudes-eliminados.component';
import { InicioComponent } from './private/inicio/inicio.component';


export const routes: Routes = [
    {path: '', component: InicioComponent},
    { path: 'inicio', component: InicioComponent },
    { path: 'solicitudes', component: SolicitudesIngresarComponent },
    { path: 'eliminaciones', component: SolicitudesEliminadosComponent }
  ];
