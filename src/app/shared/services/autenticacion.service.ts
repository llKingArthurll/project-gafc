import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  private ingresar:boolean = false;

  constructor() { }

  /**
   * ingresarAplicativo
   */
  public ingresarAplicativo(obj:any):boolean {
    this.ingresar = obj.username == 'admin' && obj.password == 'admin';
    return this.ingresar;
  }

  /**
   * habilitarIngreso
   */
  public habilitarIngreso() {
    return this.ingresar;
  }
}
