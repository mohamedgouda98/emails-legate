import { Directive, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appColorDirectiveTs]',
})
// tslint:disable-next-line:directive-class-suffix
export class Colordirective {
  colors = ['red', 'yellow', 'green', 'white', 'gray', 'black', 'pink', 'blue'];

  @HostBinding('style.background-color') color: string;

  @HostListener('keydown') setColor() {
    const colorIndex = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[colorIndex];
  }

  constructor() {}
}
