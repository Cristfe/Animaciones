import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('verde', style({
        'background-color': 'green'
      })),
      state('rojo', style({
        'background-color': 'red'
      })),
      state('amarillo', style({
        'background-color': 'yellow'
      })),
      transition('*=>*', animate(1000))
    ])
  ]
})
export class AppComponent {

  color: string;

  constructor() {
    this.color = 'rojo';
  }

  ngOnInit() {
    //cada 2 segundos cambia de un estado a otro
    setInterval(() => {
      if (this.color === 'rojo') this.color = 'amarillo';
      else if (this.color === 'amarillo') this.color = 'verde';
      else if (this.color === 'verde') this.color = 'rojo';
    }, 2000);
  }
}
