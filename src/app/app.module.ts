import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {ToastrModule} from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AnaSayfaComponent } from './components/ana-sayfa/ana-sayfa.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms"
import { OgrenciGirisComponent } from './components/girisComponents/ogrenci-giris/ogrenci-giris.component';
import { AkadamisyenAnasayfaComponent } from './components/akademisyenComponents/akadamisyen-anasayfa/akadamisyen-anasayfa.component';
import { IdareciAnasayfaComponent } from './components/idareciComponents/idareci-anasayfa/idareci-anasayfa.component';
import { OgrenciAnaSayfaComponent } from './components/ogrenciComponents/ogrenci-ana-sayfa/ogrenci-ana-sayfa.component';
import { AuthInterceptor } from './interceptros/auth.interceptor';
import { AkademisyenGirisComponent } from './components/girisComponents/akademisyen-giris/akademisyen-giris.component';
import { IdareciGirisComponent } from './components/girisComponents/idareci-giris/idareci-giris.component';
import { OgrenciNavbarComponent } from './components/ogrenciComponents/ogrenci-navbar/ogrenci-navbar.component';
import { OgrenciSidebarComponent } from './components/ogrenciComponents/ogrenci-sidebar/ogrenci-sidebar.component';
import { OgrenciGenelBilgilerComponent } from './components/ogrenciComponents/genelislemler/ogrenci-genel-bilgiler/ogrenci-genel-bilgiler.component';
import { OgrenciDanismanBilgileriComponent } from './components/ogrenciComponents/genelislemler/ogrenci-danisman-bilgileri/ogrenci-danisman-bilgileri.component';
import { OgrenciDonemDersleriComponent } from './components/ogrenciComponents/genelislemler/ogrenci-donem-dersleri/ogrenci-donem-dersleri.component';
import { OgrenciBolumDersleriComponent } from './components/ogrenciComponents/genelislemler/ogrenci-bolum-dersleri/ogrenci-bolum-dersleri.component';
import { OgrenciDersProgramiComponent } from './components/ogrenciComponents/genelislemler/ogrenci-ders-programi/ogrenci-ders-programi.component';
import { OgrenciNotListesiComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-not-listesi/ogrenci-not-listesi.component';
import { OgrenciHarcBilgileriComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-harc-bilgileri/ogrenci-harc-bilgileri.component';
import { OgrenciSinavTakvimiComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-sinav-takvimi/ogrenci-sinav-takvimi.component';
import { OgrenciDevamsizlikDurumuComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-devamsizlik-durumu/ogrenci-devamsizlik-durumu.component';
import { OgrenciDersKayitComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-ders-kayit/ogrenci-ders-kayit.component';
import { OgrenciTranskriptComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-transkript/ogrenci-transkript.component';
import { OgrenciGelenMaillerComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-gelen-mailler/ogrenci-gelen-mailler.component';
import { OgrenciGonderilenMaillerComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-gonderilen-mailler/ogrenci-gonderilen-mailler.component';
import { OgrenciKullaniciBilgileriComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-kullanici-bilgileri/ogrenci-kullanici-bilgileri.component';
import { OgrenciMailOlusturComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-mail-olustur/ogrenci-mail-olustur.component';
@NgModule({
  declarations: [
    AppComponent,
    AnaSayfaComponent,
    AkademisyenGirisComponent,
    IdareciGirisComponent,
    OgrenciGirisComponent,
    AkadamisyenAnasayfaComponent,
    IdareciAnasayfaComponent,
    OgrenciAnaSayfaComponent,
    OgrenciNavbarComponent,
    OgrenciSidebarComponent,
    OgrenciGenelBilgilerComponent,
    OgrenciDanismanBilgileriComponent,
    OgrenciDonemDersleriComponent,
    OgrenciBolumDersleriComponent,
    OgrenciDersProgramiComponent,
    OgrenciNotListesiComponent,
    OgrenciHarcBilgileriComponent,
    OgrenciSinavTakvimiComponent,
    OgrenciDevamsizlikDurumuComponent,
    OgrenciDersKayitComponent,
    OgrenciTranskriptComponent,
    OgrenciGelenMaillerComponent,
    OgrenciGonderilenMaillerComponent,
    OgrenciKullaniciBilgileriComponent,
    OgrenciMailOlusturComponent,
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
