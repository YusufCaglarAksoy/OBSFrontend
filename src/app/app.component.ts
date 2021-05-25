import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ogrenciBilgiSistemi';

  checkHomePage(){
    console.log(window.location.pathname)
    if(window.location.pathname==="/"||window.location.pathname==="/akademisyen/login"|| window.location.pathname==="/idareci/login"|| window.location.pathname==="/ogrenci/login"){
      return true;
    }
    else{
      return false
    }
  }

  checkIdareci(){
    console.log(window.location.pathname)
    if(window.location.pathname==="/"||window.location.pathname==="/akademisyen/login"|| window.location.pathname==="/idareci/login"|| window.location.pathname==="/ogrenci/login"){
      return true;
    }
    else{
      return false
    }
  }

  checkAkademisyen(){
    console.log(window.location.pathname)
    if(window.location.pathname==="/"||window.location.pathname==="/akademisyen/login"|| window.location.pathname==="/idareci/login"|| window.location.pathname==="/ogrenci/login"){
      return true;
    }
    else{
      return false
    }
  }

  checkOgrenci(){
    console.log(window.location.pathname)
    if(window.location.pathname==="/"||window.location.pathname==="/akademisyen/login"|| window.location.pathname==="/idareci/login"|| window.location.pathname==="/ogrenci/login"){
      return true;
    }
    else{
      return false
    }
  }
}
