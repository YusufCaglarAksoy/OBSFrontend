import { Component, OnInit } from '@angular/core';
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
  ogrenciFotograf:OgrenciFotograf={
    ogrenciId:2008,
    id:1002,
    fotografYolu:"0f68acc2-e5e9-45b1-a2b0-3d64288d03f5_5_18_2021.jpg",
    tarih : new Date("2021-05-25")
  }
  ogrenciDetayDto:OgrenciDetayDto
  apiUrl:string="https://localhost:44390/images/"
  fotografYolu:string

  constructor(private localStorageService:LocalStorageService,
              private ogrenciFotografService:OgrenciFotografService) { }

  ngOnInit(): void { 
    this.getUser()
  }
                

  getUser(){
    this.ogrenciDetayDto = this.localStorageService.get('user')[0];
    this.ogrenciFotografService.getByOgrenciId(this.ogrenciDetayDto.id).subscribe(response=>{
      this.ogrenciFotograf= response.data
    })
    if(this.ogrenciFotograf===null){
      this.fotografYolu = "https://i.hizliresim.com/hap5fcb.png"
    }
    else{
      this.fotografYolu = this.apiUrl+"ogrenci/"+this.ogrenciFotograf.fotografYolu
    }  
  }
}
