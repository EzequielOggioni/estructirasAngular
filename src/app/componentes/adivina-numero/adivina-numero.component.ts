import { Component } from '@angular/core';

@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivina-numero.component.html',
  styleUrls: ['./adivina-numero.component.css']
})
export class AdivinaNumeroComponent {

  public numero:number=0;
  public adivinar:number=-1;

  public comenzar (){

    this.adivinar = parseInt((String) (Math.random() * 49))+1;
  }

  public elegido(){
    if(this.numero > 50)
    this.numero =0;
    
  }
}
