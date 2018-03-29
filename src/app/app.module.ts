import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavBar }  from './navBar.component';
import { FlexLayoutModule } from "@angular/flex-layout";  

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  declarations: [ AppComponent, NavBar ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
