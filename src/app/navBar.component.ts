import { Component } from '@angular/core';

declare var require: any

@Component({
  selector: 'NavBar',
  template: require('./navBar.component.html')
})
export class NavBar {
  name: string;

  constructor() {
    this.name = 'World';
  }
}