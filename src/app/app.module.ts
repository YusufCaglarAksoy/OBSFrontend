import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {ToastrModule} from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AnaSayfaComponent } from './components/ana-sayfa/ana-sayfa.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { FormsModule, ReactiveFormsModule} from "@angular/forms"
import { OgrenciGirisComponent } from './components/girisComponents/ogrenci-giris/ogrenci-giris.component';
import { AkadamisyenAnasayfaComponent } from './components/akademisyenComponents/akadamisyen-anasayfa/akadamisyen-anasayfa.component';
import { IdareciAnasayfaComponent } from './components/idareciComponents/idareci-anasayfa/idareci-anasayfa.component';
import { OgrenciAnaSayfaComponent } from './components/ogrenciComponents/ogrenci-ana-sayfa/ogrenci-ana-sayfa.component';
import { AuthInterceptor } from './interceptros/auth.interceptor';
import { AkademisyenGirisComponent } from './components/girisComponents/akademisyen-giris/akademisyen-giris.component';
import { IdareciGirisComponent } from './components/girisComponents/idareci-giris/idareci-giris.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AnaSayfaComponent,
    AkademisyenGirisComponent,
    IdareciGirisComponent,
    OgrenciGirisComponent,
    NavbarComponent,
    AkadamisyenAnasayfaComponent,
    IdareciAnasayfaComponent,
    OgrenciAnaSayfaComponent,
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
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
