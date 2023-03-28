import { Component } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
   public personas: Array<Persona>=
[
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
  {nombre:'Ezequiel',apellido:'Oggioni',dni:2152131},
]

}
