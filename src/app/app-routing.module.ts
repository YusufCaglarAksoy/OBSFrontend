import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkadamisyenAnasayfaComponent } from './components/akademisyenComponents/akadamisyen-anasayfa/akadamisyen-anasayfa.component';
import { AnaSayfaComponent } from './components/ana-sayfa/ana-sayfa.component';
import { IdareciAnasayfaComponent } from './components/idareciComponents/idareci-anasayfa/idareci-anasayfa.component';
import { OgrenciAnaSayfaComponent } from './components/ogrenciComponents/ogrenci-ana-sayfa/ogrenci-ana-sayfa.component';
import { OgrenciGirisComponent } from './components/girisComponents/ogrenci-giris/ogrenci-giris.component';
import { AkademisyenGirisComponent } from './components/girisComponents/akademisyen-giris/akademisyen-giris.component';
import { IdareciGirisComponent } from './components/girisComponents/idareci-giris/idareci-giris.component';
import { OgrenciDersKayitComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-ders-kayit/ogrenci-ders-kayit.component';
import { OgrenciDevamsizlikDurumuComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-devamsizlik-durumu/ogrenci-devamsizlik-durumu.component';
import { OgrenciHarcBilgileriComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-harc-bilgileri/ogrenci-harc-bilgileri.component';
import { OgrenciNotListesiComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-not-listesi/ogrenci-not-listesi.component';
import { OgrenciSinavTakvimiComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-sinav-takvimi/ogrenci-sinav-takvimi.component';
import { OgrenciTranskriptComponent } from './components/ogrenciComponents/dersislemleri/ogrenci-transkript/ogrenci-transkript.component';
import { OgrenciBolumDersleriComponent } from './components/ogrenciComponents/genelislemler/ogrenci-bolum-dersleri/ogrenci-bolum-dersleri.component';
import { OgrenciDanismanBilgileriComponent } from './components/ogrenciComponents/genelislemler/ogrenci-danisman-bilgileri/ogrenci-danisman-bilgileri.component';
import { OgrenciDersProgramiComponent } from './components/ogrenciComponents/genelislemler/ogrenci-ders-programi/ogrenci-ders-programi.component';
import { OgrenciDonemDersleriComponent } from './components/ogrenciComponents/genelislemler/ogrenci-donem-dersleri/ogrenci-donem-dersleri.component';
import { OgrenciGenelBilgilerComponent } from './components/ogrenciComponents/genelislemler/ogrenci-genel-bilgiler/ogrenci-genel-bilgiler.component';
import { OgrenciGelenMaillerComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-gelen-mailler/ogrenci-gelen-mailler.component';
import { OgrenciGonderilenMaillerComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-gonderilen-mailler/ogrenci-gonderilen-mailler.component';
import { OgrenciKullaniciBilgileriComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-kullanici-bilgileri/ogrenci-kullanici-bilgileri.component';
import { OgrenciMailOlusturComponent } from './components/ogrenciComponents/kullaniciislemleri/ogrenci-mail-olustur/ogrenci-mail-olustur.component';
import { OgrenciLoginGuard } from './guards/ogrenci-login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:AnaSayfaComponent},
  {path:"ogrenci/login",component:OgrenciGirisComponent},
  {path:"akademisyen/login",component:AkademisyenGirisComponent},
  {path:"idareci/login",component:IdareciGirisComponent},

  {path:"akademisyen/anasayfa",component:AkadamisyenAnasayfaComponent},
  {path:"idareci/anasayfa",component:IdareciAnasayfaComponent},

  {path:"ogrenci/anasayfa",component:OgrenciAnaSayfaComponent},
  {path:"ogrenci/dersKayit",component:OgrenciDersKayitComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/devamsizlikDurumu",component:OgrenciDevamsizlikDurumuComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/harcBilgileri",component:OgrenciHarcBilgileriComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/notListesi",component:OgrenciNotListesiComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/sinavTakimi",component:OgrenciSinavTakvimiComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/transkript",component:OgrenciTranskriptComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/bolumDersleri",component:OgrenciBolumDersleriComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/danismanBilgileri",component:OgrenciDanismanBilgileriComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/dersProgrami",component:OgrenciDersProgramiComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/donemDersleri",component:OgrenciDonemDersleriComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/genelBilgiler",component:OgrenciGenelBilgilerComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/gelenMailler",component:OgrenciGelenMaillerComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/gonderilenMailler",component:OgrenciGonderilenMaillerComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/kullaniciBilgileri",component:OgrenciKullaniciBilgileriComponent,canActivate:[OgrenciLoginGuard]},
  {path:"ogrenci/mailOlustur",component:OgrenciMailOlusturComponent,canActivate:[OgrenciLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
