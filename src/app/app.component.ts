import { Component } from '@angular/core';

@Component({

// Decorator para transformar esta classe em um componente...

  selector: 'app-main', // Seletor HTML
  templateUrl: './app.component.html', // HTML do componente
  styleUrls: [] // Folhas de Estilo(CSS) que estabilizam o componente.

})

export class AppComponent{

    //Atributo
    titulo:string;

    //Construtor da Classe
    constructor(){

      this.titulo = "Titulo da minha aplicação";
    }

}