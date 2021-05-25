import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ogrenciBilgiSistemi';

  constructor(private localStorageService:LocalStorageService){}

  checkHomePage(){
    if(window.location.pathname==="/"||window.location.pathname==="/akademisyen/login"|| window.location.pathname==="/idareci/login"|| window.location.pathname==="/ogrenci/login"){
      return true;
    }
    else{
      return false
    }
  }
  checkOgrenciPage(){
    if(window.location.pathname==="/ogrenci/dersKayit"||window.location.pathname==="/ogrenci/devamsizlikDurumu"|| 
       window.location.pathname==="/ogrenci/harcBilgileri"|| window.location.pathname==="/ogrenci/notListesi"||
       window.location.pathname==="/ogrenci/sinavTakimi"|| window.location.pathname==="/ogrenci/transkript"||
       window.location.pathname==="/ogrenci/bolumDersleri"|| window.location.pathname==="/ogrenci/danismanBilgileri"||
       window.location.pathname==="/ogrenci/dersProgrami"|| window.location.pathname==="/ogrenci/donemDersleri"||
       window.location.pathname==="/ogrenci/genelBilgiler"|| window.location.pathname==="/ogrenci/gelenMailler"||
       window.location.pathname==="/ogrenci/gonderilenMailler"|| window.location.pathname==="/ogrenci/kullaniciBilgileri"||
       window.location.pathname==="/ogrenci/mailOlustur"|| window.location.pathname==="/ogrenci/anasayfa"){
      return true;
    }
    else{
      return false
    }
  }

}
