import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from './app.component';
import {Func1Module} from './func1/func1.module';
import { Comp1Component } from './func1/comp1/comp1.component';


@NgModule({

    imports : [BrowserModule, Func1Module], // Outros Módulos Usados
    exports : [], // Vou exportar (tornar visível) um componente/pipe...
    providers : [], // É o conjunto de serviços que estarão disponíveis para este módulo...
    declarations : [AppComponent, componente1Componente, Component1Component], // É o conjunto de componentes do módulo...
    bootstrap : [AppComponent], // É o conjunto de componentes pelo qual a aplicação web vai iniciar a execução
    
})

export class AppModule{ 



}