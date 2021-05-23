import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {ToastrModule} from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AnaSayfaComponent } from './components/ana-sayfa/ana-sayfa.component';
import { AkademisyenGirisComponent } from './components/akademisyen-giris/akademisyen-giris.component';
import { IdareciGirisComponent } from './components/idareci-giris/idareci-giris.component';
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AnaSayfaComponent,
    AkademisyenGirisComponent,
    IdareciGirisComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
