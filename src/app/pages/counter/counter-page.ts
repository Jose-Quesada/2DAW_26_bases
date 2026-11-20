
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl:'./counter-page.html',
  styleUrl:'./counter-styles.css',
})
export class CounterPage {
  // Estado tradicional (propiedad de clase)
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;

    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 0;

    this.counterSignal.set(0);
  }
}
