import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  selector: 'app-hero-page',
  styles: ``,
  templateUrl: './hero-page.html',
})
export class HeroPage {
  name = signal<string>('Ironman');
  age = signal(45);

    // Señal computada derivada
  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  // Señal computada para mayúsculas
  capitalizedName = computed(() => this.name().toUpperCase());

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(): void {
    this.age.set(60);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

}
