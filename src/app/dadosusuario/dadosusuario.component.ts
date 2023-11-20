import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dadosusuario',
  templateUrl: './dadosusuario.component.html',
  styleUrls: ['./dadosusuario.component.css']
})
export class DadosusuarioComponent {

  //variaveis

  id: string = "";
  nome: string = "";
  email: string = "";
  dataHoraAcesso: Date | null = null;

  constructor(private httpCliente:HttpClient){

    //ler o conteudo da local storage e capturar os dados do usuario
    var usuario = JSON.parse(localStorage.getItem("usuario") as string);
    
    //guardar os dados lifos da local storage
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.dataHoraAcesso = usuario.dataHoraAcesso;  
  }
  
  //objeto para capturar o formulario
  formAtualizarDados = new FormGroup({

    //campos
    nome: new FormControl('', [Validators.minLength(2)]),

    senha: new FormControl('', [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20}$/)]),
  });

  //função para exibir as mensagens de erro de validação 
get form():any{
return this.formAtualizarDados.controls;
}

onSubmit():void{

  var usuario = JSON.parse(localStorage.getItem("usuario") as string);
  var httpHeaders = new HttpHeaders({
    "Authorization" : "Bearer " + usuario.accesToken
  });

  this.httpCliente.put(environment.apiUrl + "atualizar-dados",this.formAtualizarDados.value, {headers: httpHeaders}).subscribe({
    next:(data:any)=>{
      alert("Dados do usuário atualizado com sucesso");
      this.formAtualizarDados.reset(); ///limpar o formulario
    },
    error:(e)=>{
      console.log(e.error);
    }
    
        })
  }

  //função para logout do usuaroi
  logout():void{
    if(window.confirm("Deseja realmente sair da sua conta?")){

      //apaga os dados que estão gravados na local storage
      localStorage.removeItem("usuario");

      //recarregar a página (reload)
      window.location.href = "/";
    }
  }

   
}
