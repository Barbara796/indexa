import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@Component({
  selector: 'app-root',
  imports: [
            RouterOutlet,
            ContainerComponent,
            EncabezadoComponent, 
            SeparadorComponent,
            ContactoComponent,
            CommonModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  alfabeto: string = "abcdefghijklmnñopqrstuvwxy"
  nombrePrueba: string = "José"
  telefonoPrueba: string = "7278889299"
}
