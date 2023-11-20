import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  usuarioAutenticado: boolean = false;

  constructor(){
  this.usuarioAutenticado = localStorage.getItem("usuario") != null;
  }
}
