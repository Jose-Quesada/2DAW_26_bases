import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  imports: [],
  selector: 'app-dragonball-page',
  styles: ``,
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  name = signal<string>('');
  power = signal(0);

  // Señal con el listado inicial de personajes
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

}
