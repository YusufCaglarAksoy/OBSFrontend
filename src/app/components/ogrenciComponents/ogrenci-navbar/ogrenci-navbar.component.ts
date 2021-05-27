import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { OgrenciFotograf } from 'src/app/models/fotografModels/ogrenciFotograf';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { OgrenciFotografService } from 'src/app/services/ogrenci-fotograf.service';

@Component({
  selector: 'app-ogrenci-navbar',
  templateUrl: './ogrenci-navbar.component.html',
  styleUrls: ['./ogrenci-navbar.component.css']
})
export class OgrenciNavbarComponent implements OnInit {
  ogrenciFotograf:OgrenciFotograf
  ogrenciDetayDto:OgrenciDetayDto
  apiUrl:string="https://localhost:44390/images/"
  fotografYolu:string
  toastrService: any;

  constructor(private localStorageService:LocalStorageService,
              private router:Router) { }

  ngOnInit(): void { 
    this.getUser()
  }
                

  getUser(){
    this.ogrenciDetayDto = this.localStorageService.get('user')[0];
    
  }

  getUserPhoto(){
    if(!this.ogrenciDetayDto.fotografYolu){
      return "https://i.hizliresim.com/hap5fcb.png"
    }
    else{
      return this.apiUrl+"ogrenci/"+this.ogrenciDetayDto.fotografYolu
    }  
  }

  logout(){
    this.localStorageService.remove("token")
    this.localStorageService.remove("user")
    this.router.navigate(["/"])

  }

}
