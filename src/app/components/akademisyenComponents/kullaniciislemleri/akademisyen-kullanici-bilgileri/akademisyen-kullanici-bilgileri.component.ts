import { Component, OnInit } from '@angular/core';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { AkademisyenService } from 'src/app/services/akademisyen.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-akademisyen-kullanici-bilgileri',
  templateUrl: './akademisyen-kullanici-bilgileri.component.html',
  styleUrls: ['./akademisyen-kullanici-bilgileri.component.css']
})
export class AkademisyenKullaniciBilgileriComponent implements OnInit {
  akademisyenDetayDto:AkademisyenDetayDto
  constructor(private localStorageService:LocalStorageService,
    private akademisyenService:AkademisyenService) { }

  ngOnInit(): void {
    this.getBilgiler()
  }
   getBilgiler(){
     this.akademisyenDetayDto = this.localStorageService.get('user')[0]
   }
   
}
