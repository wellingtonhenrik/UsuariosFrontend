import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CriarcontaComponent } from './criarconta/criarconta.component';
import { AutenticarComponent } from './autenticar/autenticar.component';
import { RecuperarsenhaComponent } from './recuperarsenha/recuperarsenha.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { DadosusuarioComponent } from './dadosusuario/dadosusuario.component';
@NgModule({
  declarations: [
    AppComponent,
    CriarcontaComponent,
    AutenticarComponent,
    RecuperarsenhaComponent,
    DadosusuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //formulario
    ReactiveFormsModule, //formulario
    HttpClientModule // hhtp client
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
