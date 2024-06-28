import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-solicitudes-ingresar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './solicitudes-ingresar.component.html',
  styleUrl: './solicitudes-ingresar.component.scss'
})
export class SolicitudesIngresarComponent {
  fechaActual!: String;
  formAgregar: FormGroup;

  constructor(private fb: FormBuilder) {
    this.obtenerFechaActual();
    this.formAgregar = this.fb.group({
      fechaActual: ['', Validators.required],
      codSolicitud:['', Validators.required],
      detalleSolicitud:['', Validators.required]
    });
  }

  obtenerFechaActual() {
    const fechaActual = new Date();
    this.fechaActual = fechaActual.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });
  }

  agregarSolicitud(){
    console.log(this.formAgregar.value);
  }
}
