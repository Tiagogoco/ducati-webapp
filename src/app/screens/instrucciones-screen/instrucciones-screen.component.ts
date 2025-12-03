import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-instrucciones-screen',
  templateUrl: './instrucciones-screen.component.html',
  styleUrls: ['./instrucciones-screen.component.scss']
})
export class InstruccionesScreenComponent {

  constructor(
    public router: Router
  ){}
  public goJuego(){
    this.router.navigate(["juego"]);
  }
}
