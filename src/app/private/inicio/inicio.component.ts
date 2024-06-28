import { Component } from '@angular/core';
import { Solicitudes } from '../../shared/Interfaces/solicitudes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  listSolicitudes: Solicitudes[] = [
    {
      solicitudID: 1,
      usuarioSolicitante: 'Pepito',
      codigoSolicitud: 123456,
      detalleSolicitud: 'Detalles largos',
      fechaRegistro: '30-06-24',
      estado: 0
    }
  ]
}
