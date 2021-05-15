import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import  {  FlexLayoutModule  } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {HTTP_INTERCEPTORS, HttpClientModule,HttpRequest} from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor'





@NgModule({
  declarations: [
    AppComponent,
    XyzComponent

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSliderModule ,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    AuthInterceptor,
    HttpRequest,



  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
