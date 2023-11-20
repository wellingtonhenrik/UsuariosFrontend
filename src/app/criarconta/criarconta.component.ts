import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.component.html',
  styleUrls: ['./criarconta.component.css']
})
export class CriarcontaComponent {

  
  constructor(private httpclient: HttpClient) {}

  //objeto para capturar o formulario
  formCriarConta = new FormGroup({

    //campos
    email: new FormControl('', [Validators.required, Validators.email]),

    senha: new FormControl('', [Validators.required, Validators. pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20}$/)]),
    
    ConfirmacaoSenha: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20}$/)]),
  
    nome : new FormControl('', [Validators.required])
    
  });

  //função para exibir as mensagens de erro de validação 
get form():any{
return this.formCriarConta.controls;
}

//função para captuar o SUBMIT do formulario 

onSubmit():void{
  this.httpclient.post(environment.apiUrl + "criar-conta",this.formCriarConta.value).subscribe({
next:(data:any)=>{
  localStorage.setItem("usuario", JSON.stringify(data));
},
error:(e)=>{
  alert(e.error.mensagem);
}

    })
}
  
}
