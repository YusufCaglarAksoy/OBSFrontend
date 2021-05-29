import { Component, OnInit } from '@angular/core';
import { IdareciDetayDto } from 'src/app/models/detayModels/idareciDetayDto';
import { AkademisyenService } from 'src/app/services/akademisyen.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-idareci-kullanici-bilgileri',
  templateUrl: './idareci-kullanici-bilgileri.component.html',
  styleUrls: ['./idareci-kullanici-bilgileri.component.css']
})
export class IdareciKullaniciBilgileriComponent implements OnInit {
  idareciDetayDto:IdareciDetayDto
  constructor(private localStorageService:LocalStorageService,
    private akademisyenService:AkademisyenService) { }

  ngOnInit(): void {
    this.getBilgiler()
  }
   getBilgiler(){
     this.idareciDetayDto = this.localStorageService.get('user')[0]
   }
   

}
