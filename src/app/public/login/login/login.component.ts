import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutenticacionService } from '../../../shared/services/autenticacion.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public myForm!: FormGroup;
  constructor(private fb:FormBuilder, private loginPrd:AutenticacionService){
  
  }

  ngOnInit():void{
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  public submitForm(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })
      return;
    }

    if(!this.loginPrd.ingresarAplicativo(this.myForm.value)){
      alert("Usuario o contraseña inválido")
    }
  }

  public get controls():any{
    return this.myForm.controls;
  }
}
