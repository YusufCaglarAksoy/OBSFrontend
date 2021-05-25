import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkadamisyenAnasayfaComponent } from './components/akademisyenComponents/akadamisyen-anasayfa/akadamisyen-anasayfa.component';
import { AnaSayfaComponent } from './components/ana-sayfa/ana-sayfa.component';
import { IdareciAnasayfaComponent } from './components/idareciComponents/idareci-anasayfa/idareci-anasayfa.component';
import { OgrenciAnaSayfaComponent } from './components/ogrenciComponents/ogrenci-ana-sayfa/ogrenci-ana-sayfa.component';
import { OgrenciGirisComponent } from './components/girisComponents/ogrenci-giris/ogrenci-giris.component';
import { AkademisyenGirisComponent } from './components/girisComponents/akademisyen-giris/akademisyen-giris.component';
import { IdareciGirisComponent } from './components/girisComponents/idareci-giris/idareci-giris.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:AnaSayfaComponent},
  {path:"ogrenci/login",component:OgrenciGirisComponent},
  {path:"akademisyen/login",component:AkademisyenGirisComponent},
  {path:"idareci/login",component:IdareciGirisComponent},
  {path:"ogrenci/anasayfa",component:OgrenciAnaSayfaComponent},
  {path:"akademisyen/anasayfa",component:AkadamisyenAnasayfaComponent},
  {path:"idareci/anasayfa",component:IdareciAnasayfaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
