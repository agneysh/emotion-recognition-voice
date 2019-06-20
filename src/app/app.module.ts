import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AudioUtilService } from './services/audioutil/audio-util.service';
import { RecorderService } from './services/recorder/recorder.service';
import { WebEmpathService } from './services/webempath/web-empath.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AudioUtilService, RecorderService, WebEmpathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
