import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({

    declarations: [Comp1Component], // Componentes do Móódulo
    exports: [Comp1Component], // 
    imports: [CommonModule]
    
})

export class Func1Module{}