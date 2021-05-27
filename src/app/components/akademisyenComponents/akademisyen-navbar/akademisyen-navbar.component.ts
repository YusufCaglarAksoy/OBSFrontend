import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  akademisyenDetayDto:AkademisyenDetayDto
  apiUrl:string="https://localhost:44390/images/"
  fotografYolu:string
  toastrService: any;

  constructor(private localStorageService:LocalStorageService,
              private router:Router) { }

  ngOnInit(): void { 
    this.getUser()
  }
                

  getUser(){
    this.akademisyenDetayDto = this.localStorageService.get('user')[0];
    
  }

  getUserPhoto(){
    if(!this.akademisyenDetayDto.fotografYolu){
      return "https://i.hizliresim.com/hap5fcb.png"
    }
    else{
      return this.apiUrl+"akademisyen/"+this.akademisyenDetayDto.fotografYolu
    }  
  }

  logout(){
    this.localStorageService.remove("token")
    this.localStorageService.remove("user")
    this.router.navigate(["/"])
    this.toastrService.success("Çıkış yapıldı")
  }
}
