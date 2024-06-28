import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./public/login/login/login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from "./private/main/main.component";
import { CommonModule } from '@angular/common';
import { AutenticacionService } from './shared/services/autenticacion.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginComponent, FormsModule, ReactiveFormsModule, MainComponent, CommonModule]
})
export class AppComponent {
  title = 'proyecto-gafc';

  constructor(private loginPrd: AutenticacionService){
  
  }

  public visualizarMenu(){
    return this.loginPrd.habilitarIngreso();
  }
}
