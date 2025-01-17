import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
            RouterOutlet,
            ContainerComponent,
            EncabezadoComponent, 
            SeparadorComponent,
            CommonModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  alfabeto: string = "abcdefghijklmnñopqrstuvwxy"

}
