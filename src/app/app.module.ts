import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from './app.component';

@NgModule({

    imports : [BrowserModule], // Outros Módulos Usados
    exports : [], // Vou exportar (tornar visível) um componente/pipe...
    providers : [], // É o conjunto de serviços que estarão disponíveis para este módulo...
    declarations : [AppComponent], // É o conjunto de componentes do módulo...
    bootstrap : [AppComponent], // É o conjunto de componentes pelo qual a aplicação web vai iniciar a execução
    
})

export class AppModule{ 



}