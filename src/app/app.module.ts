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
import { FormsModule, ReactiveFormsModule} from "@angular/forms"
import { OgrenciGirisComponent } from './components/ogrenci-giris/ogrenci-giris.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AnaSayfaComponent,
    AkademisyenGirisComponent,
    IdareciGirisComponent,
    OgrenciGirisComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
