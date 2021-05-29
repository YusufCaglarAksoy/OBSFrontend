import { Component, OnInit } from '@angular/core';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { OgrenciService } from 'src/app/services/ogrenci.service';

@Component({
  selector: 'app-akadamisyen-anasayfa',
  templateUrl: './akadamisyen-anasayfa.component.html',
  styleUrls: ['./akadamisyen-anasayfa.component.css']
})
export class AkadamisyenAnasayfaComponent implements OnInit {

  akademisyen:AkademisyenDetayDto;

  constructor(private localStorageService:LocalStorageService,
              private ogrenciService:OgrenciService) { }

  ngOnInit(): void { 
    this.getAkademisyen()
  }

  getAkademisyen(){
    this.akademisyen=this.localStorageService.get('user')[0];
  }
}