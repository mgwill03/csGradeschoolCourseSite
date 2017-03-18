import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { VideoDisplayComponent } from './video-display/video-display.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    NavigationBarComponent,
    VideoDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
