import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.component.html',
  styleUrls: ['./recuperarsenha.component.css']
})
export class RecuperarsenhaComponent {

  constructor(private httpClient: HttpClient){}

  formRecuperarSenha = new FormGroup({

    email : new FormControl('', [Validators.required,Validators.email])

  });

  get form():any{
return this.formRecuperarSenha.controls;
  }

  onSubmit():void{
    console.log(this.formRecuperarSenha.value);
    this.httpClient.post(environment.apiUrl + "recuperar-senha",this.formRecuperarSenha.value).subscribe({
  next:(data:any)=>{
    console.log(data);
  },
  error:(e)=>{
    console.log(e.error);
  }
  
      })
  }
}
