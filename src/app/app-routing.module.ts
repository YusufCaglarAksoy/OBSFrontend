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
import { IdareciAkademisyenListesiComponent } from './components/idareciComponents/genelislemler/idareci-akademisyen-listesi/idareci-akademisyen-listesi.component';
import { IdareciBolumListesiComponent } from './components/idareciComponents/genelislemler/idareci-bolum-listesi/idareci-bolum-listesi.component';
import { IdareciDersListesiComponent } from './components/idareciComponents/genelislemler/idareci-ders-listesi/idareci-ders-listesi.component';
import { IdareciOgrenciListesiComponent } from './components/idareciComponents/genelislemler/idareci-ogrenci-listesi/idareci-ogrenci-listesi.component';
import { IdareciGelenMaillerComponent } from './components/idareciComponents/kullaniciislemleri/idareci-gelen-mailler/idareci-gelen-mailler.component';
import { IdareciGonderilenMaillerComponent } from './components/idareciComponents/kullaniciislemleri/idareci-gonderilen-mailler/idareci-gonderilen-mailler.component';
import { IdareciKullaniciBilgileriComponent } from './components/idareciComponents/kullaniciislemleri/idareci-kullanici-bilgileri/idareci-kullanici-bilgileri.component';
import { IdareciMailOLusturComponent } from './components/idareciComponents/kullaniciislemleri/idareci-mail-olustur/idareci-mail-olustur.component';
import { AkademisyenDersProgramiComponent } from './components/akademisyenComponents/genelislemler/akademisyen-ders-programi/akademisyen-ders-programi.component';
import { AkademisyenGenelBilgilerComponent } from './components/akademisyenComponents/genelislemler/akademisyen-genel-bilgiler/akademisyen-genel-bilgiler.component';
import { AkademisyenOgrenciBilgileriComponent } from './components/akademisyenComponents/genelislemler/akademisyen-ogrenci-bilgileri/akademisyen-ogrenci-bilgileri.component';
import { AkademisyenSinavTakvimiComponent } from './components/akademisyenComponents/genelislemler/akademisyen-sinav-takvimi/akademisyen-sinav-takvimi.component';
import { AkademisyenSinifListeComponent } from './components/akademisyenComponents/genelislemler/akademisyen-sinif-liste/akademisyen-sinif-liste.component';
import { AkademisyenDevamsizlikGirisComponent } from './components/akademisyenComponents/dersislemleri/akademisyen-devamsizlik-giris/akademisyen-devamsizlik-giris.component';
import { AkademisyenNotGirisComponent } from './components/akademisyenComponents/dersislemleri/akademisyen-not-giris/akademisyen-not-giris.component';
import { AkademisyenSinavGirisComponent } from './components/akademisyenComponents/dersislemleri/akademisyen-sinav-giris/akademisyen-sinav-giris.component';
import { AkademisyenDersKayitOnaylamaComponent } from './components/akademisyenComponents/danismanislemleri/akademisyen-ders-kayit-onaylama/akademisyen-ders-kayit-onaylama.component';
import { AkademisyenOgrenciListesiComponent } from './components/akademisyenComponents/danismanislemleri/akademisyen-ogrenci-listesi/akademisyen-ogrenci-listesi.component';
import { AkademisyenGelenMaillerComponent } from './components/akademisyenComponents/kullaniciislemleri/akademisyen-gelen-mailler/akademisyen-gelen-mailler.component';
import { AkademisyenGonderilenMaillerComponent } from './components/akademisyenComponents/kullaniciislemleri/akademisyen-gonderilen-mailler/akademisyen-gonderilen-mailler.component';
import { AkademisyenKullaniciBilgileriComponent } from './components/akademisyenComponents/kullaniciislemleri/akademisyen-kullanici-bilgileri/akademisyen-kullanici-bilgileri.component';
import { AkademisyenMailOlusturComponent } from './components/akademisyenComponents/kullaniciislemleri/akademisyen-mail-olustur/akademisyen-mail-olustur.component';
import { IdareciLoginGuard } from './guards/idareci-login.guard';
import { AkademisyenLoginGuard } from './guards/akademisyen-login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:AnaSayfaComponent},
  {path:"ogrenci/login",component:OgrenciGirisComponent},
  {path:"akademisyen/login",component:AkademisyenGirisComponent},
  {path:"idareci/login",component:IdareciGirisComponent},

  {path:"ogrenci/anasayfa",component:OgrenciAnaSayfaComponent,canActivate:[OgrenciLoginGuard]},
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

  {path:"idareci/anasayfa",component:IdareciAnasayfaComponent,canActivate:[IdareciLoginGuard]},
  {path:"idareci/akademisyenListesi",component:IdareciAkademisyenListesiComponent,canActivate:[IdareciLoginGuard]},
  {path:"idareci/bolumListesi",component:IdareciBolumListesiComponent,canActivate:[IdareciLoginGuard]},
  {path:"idareci/dersListesi",component:IdareciDersListesiComponent,canActivate:[IdareciLoginGuard]},
  {path:"idareci/ogrenciListesi",component:IdareciOgrenciListesiComponent,canActivate:[IdareciLoginGuard]},
  {path:"idareci/gelenMailler",component:IdareciGelenMaillerComponent,canActivate:[IdareciLoginGuard]},
  {path:"idareci/gonderilenMailler",component:IdareciGonderilenMaillerComponent,canActivate:[IdareciLoginGuard]},
  {path:"idareci/kullaniciBilgileri",component:IdareciKullaniciBilgileriComponent,canActivate:[IdareciLoginGuard]},
  {path:"idareci/mailOlustur",component:IdareciMailOLusturComponent,canActivate:[IdareciLoginGuard]},

  {path:"akademisyen/anasayfa",component:AkadamisyenAnasayfaComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/dersProgrami",component:AkademisyenDersProgramiComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/genelBilgiler",component:AkademisyenGenelBilgilerComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/ogrenciBilgileri",component:AkademisyenOgrenciBilgileriComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/sinavTakvimi",component:AkademisyenSinavTakvimiComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/sinifListe",component:AkademisyenSinifListeComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/devamsizlikGiris",component:AkademisyenDevamsizlikGirisComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/notGiris",component:AkademisyenNotGirisComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/sinavGiris",component:AkademisyenSinavGirisComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/dersKayitOnaylama",component:AkademisyenDersKayitOnaylamaComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/ogrenciListesi",component:AkademisyenOgrenciListesiComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/gelenMailler",component:AkademisyenGelenMaillerComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/gonderilenMailler",component:AkademisyenGonderilenMaillerComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/kullaniciBilgier",component:AkademisyenKullaniciBilgileriComponent,canActivate:[AkademisyenLoginGuard]},
  {path:"akademisyen/mailOlustur",component:AkademisyenMailOlusturComponent,canActivate:[AkademisyenLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
