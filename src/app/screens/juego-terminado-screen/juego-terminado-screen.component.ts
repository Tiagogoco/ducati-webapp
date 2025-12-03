import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-terminado-screen',
  templateUrl: './juego-terminado-screen.component.html',
  styleUrls: ['./juego-terminado-screen.component.scss']
})
export class JuegoTerminadoScreenComponent {

  constructor(
    public router: Router
  ){}

  public goInicio(){
    this.router.navigate(["home"]);
  }
}
