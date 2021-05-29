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
import { OgrenciBolumDersleriComponent } from './components/ogrenciComponents/genelislemler/ogrenci-bolum-dersleri/ogrenci-bolum-dersleri.component';
import { OgrenciDersProgramiComponent } from './components/ogrenciComponents/genelislemler/ogrenci-ders-programi/ogrenci-ders-programi.component';
import { OgrenciNotListesiComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-not-listesi/ogrenci-not-listesi.component';
import { OgrenciHarcBilgileriComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-harc-bilgileri/ogrenci-harc-bilgileri.component';
import { OgrenciDevamsizlikDurumuComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-devamsizlik-durumu/ogrenci-devamsizlik-durumu.component';
import { OgrenciDersKayitComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-ders-kayit/ogrenci-ders-kayit.component';
import { OgrenciTranskriptComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-transkript/ogrenci-transkript.component';
import { OgrenciGelenMaillerComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-gelen-mailler/ogrenci-gelen-mailler.component';
import { OgrenciGonderilenMaillerComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-gonderilen-mailler/ogrenci-gonderilen-mailler.component';
import { OgrenciKullaniciBilgileriComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-kullanici-bilgileri/ogrenci-kullanici-bilgileri.component';
import { OgrenciMailOlusturComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-mail-olustur/ogrenci-mail-olustur.component';
import { IdareciSidebarComponent } from './components/idareciComponents/idareci-sidebar/idareci-sidebar.component';
import { IdareciNavbarComponent } from './components/idareciComponents/idareci-navbar/idareci-navbar.component';
import { AkademisyenGenelBilgilerComponent } from './components/akademisyenComponents/genelislemler/akademisyen-genel-bilgiler/akademisyen-genel-bilgiler.component';
import { AkademisyenDersProgramiComponent } from './components/akademisyenComponents/genelislemler/akademisyen-ders-programi/akademisyen-ders-programi.component';
import { AkademisyenSinifListeComponent } from './components/akademisyenComponents/genelislemler/akademisyen-sinif-liste/akademisyen-sinif-liste.component';
import { AkademisyenNotGirisComponent } from './components/akademisyenComponents/dersislemleri/akademisyen-not-giris/akademisyen-not-giris.component';
import { IdareciAkademisyenListesiComponent } from './components/idareciComponents/genelislemler/idareci-akademisyen-listesi/idareci-akademisyen-listesi.component';
import { IdareciBolumListesiComponent } from './components/idareciComponents/genelislemler/idareci-bolum-listesi/idareci-bolum-listesi.component';
import { IdareciDersListesiComponent } from './components/idareciComponents/genelislemler/idareci-ders-listesi/idareci-ders-listesi.component';
import { IdareciOgrenciListesiComponent } from './components/idareciComponents/genelislemler/idareci-ogrenci-listesi/idareci-ogrenci-listesi.component';
import { IdareciGelenMaillerComponent } from './components/idareciComponents/kullaniciislemleri/idareci-gelen-mailler/idareci-gelen-mailler.component';
import { IdareciGonderilenMaillerComponent } from './components/idareciComponents/kullaniciislemleri/idareci-gonderilen-mailler/idareci-gonderilen-mailler.component';
import { IdareciKullaniciBilgileriComponent } from './components/idareciComponents/kullaniciislemleri/idareci-kullanici-bilgileri/idareci-kullanici-bilgileri.component';
import { IdareciMailOLusturComponent } from './components/idareciComponents/kullaniciislemleri/idareci-mail-olustur/idareci-mail-olustur.component';
import { AkademisyenSinavGirisComponent } from './components/akademisyenComponents/dersislemleri/akademisyen-sinav-giris/akademisyen-sinav-giris.component';
import { AkademisyenSidebarComponent } from './components/akademisyenComponents/akademisyen-sidebar/akademisyen-sidebar.component';
import { AkademisyenDersKayitOnaylamaComponent } from './components/akademisyenComponents/danismanislemleri/akademisyen-ders-kayit-onaylama/akademisyen-ders-kayit-onaylama.component';
import { AkademisyenOgrenciListesiComponent } from './components/akademisyenComponents/danismanislemleri/akademisyen-ogrenci-listesi/akademisyen-ogrenci-listesi.component';
import { AkademisyenDevamsizlikGirisComponent } from './components/akademisyenComponents/dersislemleri/akademisyen-devamsizlik-giris/akademisyen-devamsizlik-giris.component';
import { AkademisyenGelenMaillerComponent } from './components/akademisyenComponents/kullaniciislemleri/akademisyen-gelen-mailler/akademisyen-gelen-mailler.component';
import { AkademisyenGonderilenMaillerComponent } from './components/akademisyenComponents/kullaniciislemleri/akademisyen-gonderilen-mailler/akademisyen-gonderilen-mailler.component';
import { AkademisyenKullaniciBilgileriComponent } from './components/akademisyenComponents/kullaniciislemleri/akademisyen-kullanici-bilgileri/akademisyen-kullanici-bilgileri.component';
import { AkademisyenMailOlusturComponent } from './components/akademisyenComponents/kullaniciislemleri/akademisyen-mail-olustur/akademisyen-mail-olustur.component';
import { AkademisyenNavbarComponent } from './components/akademisyenComponents/akademisyen-navbar/akademisyen-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { AkademisyenSinavTakvimiComponent } from './components/akademisyenComponents/genelislemler/akademisyen-sinav-takvimi/akademisyen-sinav-takvimi.component';

@NgModule({
  declarations: [
    AppComponent,
    AnaSayfaComponent,
    AkademisyenGirisComponent,
    IdareciGirisComponent,
    OgrenciGirisComponent,
    OgrenciAnaSayfaComponent,
    OgrenciNavbarComponent,
    OgrenciSidebarComponent,
    OgrenciGenelBilgilerComponent,
    OgrenciDanismanBilgileriComponent,
    OgrenciBolumDersleriComponent,
    OgrenciDersProgramiComponent,
    OgrenciNotListesiComponent,
    OgrenciHarcBilgileriComponent,
    OgrenciDevamsizlikDurumuComponent,
    OgrenciDersKayitComponent,
    OgrenciTranskriptComponent,
    OgrenciGelenMaillerComponent,
    OgrenciGonderilenMaillerComponent,
    OgrenciKullaniciBilgileriComponent,
    OgrenciMailOlusturComponent,
    IdareciAnasayfaComponent,
    IdareciSidebarComponent,
    IdareciNavbarComponent,
    IdareciAkademisyenListesiComponent,
    IdareciBolumListesiComponent,
    IdareciDersListesiComponent,
    IdareciOgrenciListesiComponent,
    IdareciGelenMaillerComponent,
    IdareciGonderilenMaillerComponent,
    IdareciKullaniciBilgileriComponent,
    IdareciMailOLusturComponent,
    AkadamisyenAnasayfaComponent,
    AkademisyenSidebarComponent,
    AkademisyenDersKayitOnaylamaComponent,
    AkademisyenOgrenciListesiComponent,
    AkademisyenDevamsizlikGirisComponent,
    AkademisyenNotGirisComponent,
    AkademisyenSinavGirisComponent,
    AkademisyenGenelBilgilerComponent,
    AkademisyenDersProgramiComponent,
    AkademisyenSinifListeComponent,
    AkademisyenGelenMaillerComponent,
    AkademisyenGonderilenMaillerComponent,
    AkademisyenKullaniciBilgileriComponent,
    AkademisyenMailOlusturComponent,
    AkademisyenNavbarComponent,
    FooterComponent,
    AkademisyenSinavTakvimiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
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
