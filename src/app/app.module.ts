import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgGridModule } from 'angular2-grid';

import { AppComponent } from './app.component';
import {RedComponent} from './red/red.component';
import {GreenComponent} from './green/green.component';
import {BlueComponent} from './blue/blue.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    GreenComponent,
    BlueComponent
  ],
  imports: [
    NgGridModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
