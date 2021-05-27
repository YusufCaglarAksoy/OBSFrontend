import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  idareciDetayDto:IdareciDetayDto
  apiUrl:string="https://localhost:44390/images/"
  fotografYolu:string
  toastrService: any;

  constructor(private localStorageService:LocalStorageService,
              private router:Router) { }

  ngOnInit(): void { 
    this.getUser()
  }
                

  getUser(){
    this.idareciDetayDto = this.localStorageService.get('user')[0];
    
  }

  getUserPhoto(){
    if(!this.idareciDetayDto.fotografYolu){
      return "https://i.hizliresim.com/hap5fcb.png"
    }
    else{
      return this.apiUrl+"idareci/"+this.idareciDetayDto.fotografYolu
    }  
  }

  logout(){
    this.localStorageService.remove("token")
    this.localStorageService.remove("user")
    this.router.navigate(["/"])
    this.toastrService.success("Çıkış yapıldı")
  }

}
