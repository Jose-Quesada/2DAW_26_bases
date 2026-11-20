import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';

@Component({
  imports: [RouterOutlet, CounterPage],
  selector: 'nuevo-componente',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('proyecto1');
}
