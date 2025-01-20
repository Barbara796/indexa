import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  /* @Input() nombre: string = "";
  @Input() telefono: string = ""; */

  nombre = input<string>("");
  telefono = input<string>("");

}
