import { Component, OnInit } from '@angular/core';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { AkademisyenFotograf } from 'src/app/models/fotografModels/akademisyenFotograf';
import { AkademisyenFotografService } from 'src/app/services/akademisyen-fotograf.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-akademisyen-navbar',
  templateUrl: './akademisyen-navbar.component.html',
  styleUrls: ['./akademisyen-navbar.component.css']
})
export class AkademisyenNavbarComponent implements OnInit {
  akademistenFotograf:AkademisyenFotograf={
    akademisyenId:2008,
    id:1002,
    fotografYolu:"0f68acc2-e5e9-45b1-a2b0-3d64288d03f5_5_18_2021.jpg",
    tarih : new Date("2021-05-25")
  }
  akademisyenDetayDto:AkademisyenDetayDto
  apiUrl:string="https://localhost:44390/images/"
  fotografYolu:string

  constructor(private localStorageService:LocalStorageService,
              private akademisyenFotografService:AkademisyenFotografService) { }

  ngOnInit(): void { 
    this.getUser()
  }
                

  getUser(){
    this.akademisyenDetayDto = this.localStorageService.get('user')[0];
    this.akademisyenFotografService.getByAkademisyenId(this.akademisyenDetayDto.id).subscribe(response=>{
      this.akademistenFotograf= response.data
    })
    if(this.akademistenFotograf===null){
      this.fotografYolu = "https://i.hizliresim.com/hap5fcb.png"
    }
    else{
      this.fotografYolu = this.apiUrl+"ogrenci/"+this.akademistenFotograf.fotografYolu
    }  
  }
}
