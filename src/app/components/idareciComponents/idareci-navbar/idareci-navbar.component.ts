import { Component, OnInit } from '@angular/core';
import { IdareciDetayDto } from 'src/app/models/detayModels/idareciDetayDto';
import { IdareciFotograf } from 'src/app/models/fotografModels/idareciFotograf';
import { IdareciFotografService } from 'src/app/services/idareci-fotograf.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-idareci-navbar',
  templateUrl: './idareci-navbar.component.html',
  styleUrls: ['./idareci-navbar.component.css']
})
export class IdareciNavbarComponent implements OnInit {
  idareciFotograf:IdareciFotograf={
    idareciId:2008,
    id:1002,
    fotografYolu:"0f68acc2-e5e9-45b1-a2b0-3d64288d03f5_5_18_2021.jpg",
    tarih : new Date("2021-05-25")
  }
  idareciDetayDto:IdareciDetayDto
  apiUrl:string="https://localhost:44390/images/"
  fotografYolu:string

  constructor(private localStorageService:LocalStorageService,
              private idareciFotografService:IdareciFotografService) { }

  ngOnInit(): void { 
    this.getUser()
  }
                

  getUser(){
    this.idareciDetayDto = this.localStorageService.get('user')[0];
    this.idareciFotografService.getByIdareciId(this.idareciDetayDto.id).subscribe(response=>{
      this.idareciFotograf= response.data
    })
    if(this.idareciFotograf===null){
      this.fotografYolu = "https://i.hizliresim.com/hap5fcb.png"
    }
    else{
      this.fotografYolu = this.apiUrl+"ogrenci/"+this.idareciFotograf.fotografYolu
    }  
  }

}
