import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent {

  mensagem: string = "";

  //construtor
  constructor(
    private httpClient: HttpClient
    ) {}

  //objeto para capturar o formulario
  formAutenticar = new FormGroup({

    //campos
    email: new FormControl('', [Validators.required, Validators.email]),

    senha: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20}$/)]),
  });

  //função para exibir as mensagens de erro de validação 
get form():any{
return this.formAutenticar.controls;
}

//função para captuar o SUBMIT do formulario 

onSubmit():void{
  console.log(this.formAutenticar.value);
  this.httpClient.post(environment.apiUrl + "autenticar",this.formAutenticar.value).subscribe({
next:(data:any)=>{  
  localStorage.setItem("usuario", JSON.stringify(data));

  //recarregar a pagina do navegadro
  window.location.href = "/";
},
error:(e)=>{
   this.mensagem = e.error.mensagem;
    
}
    })
}

}
