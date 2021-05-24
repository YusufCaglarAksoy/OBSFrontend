import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkademisyenGirisComponent } from './components/akademisyen-giris/akademisyen-giris.component';
import { AnaSayfaComponent } from './components/ana-sayfa/ana-sayfa.component';
import { IdareciGirisComponent } from './components/idareci-giris/idareci-giris.component';
import { OgrenciGirisComponent } from './components/ogrenci-giris/ogrenci-giris.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:AnaSayfaComponent},
  {path:"ogrenci/login",component:OgrenciGirisComponent},
  {path:"akademisyen/login",component:AkademisyenGirisComponent},
  {path:"idareci/login",component:IdareciGirisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
