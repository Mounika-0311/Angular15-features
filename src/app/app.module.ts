import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandaloneAPIsComponent } from './components/standalone-apis/standalone-apis.component';
import { DemoComponent } from './demo/demo.component';
import { FontColorDirective } from './directive/font-color.directive';
import { ItalicsFontDirective } from './directive/italics-font.directive';
import { MouseHoverDirective } from './directive/mouse-hover.directive';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';
import { Tab4Component } from './components/tab4/tab4.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    StandaloneAPIsComponent,
    // Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoComponent,
    // FontColorDirective,
    // ItalicsFontDirective
    MouseHoverDirective,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
