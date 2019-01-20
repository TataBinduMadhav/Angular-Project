import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDreamComponentComponent } from './my-dream-component/my-dream-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDreamComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
