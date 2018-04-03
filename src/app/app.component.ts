import { Component } from '@angular/core';

declare var require: any

@Component({
  selector: 'my-app',
  template: require('./app.component.html')  
})
export class AppComponent { name = 'Angular'; }
