import { Component, OnInit } from '@angular/core';
import { HarcDetayDto } from 'src/app/models/detayModels/harcDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { HarcService } from 'src/app/services/harc.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-ogrenci-ana-sayfa',
  templateUrl: './ogrenci-harc-bilgileri.component.html',
  styleUrls: ['./ogrenci-harc-bilgileri.component.css']
})
export class OgrenciHarcBilgileriComponent implements OnInit {

  ogrenciDetayDto:OgrenciDetayDto
  harcs:HarcDetayDto[]
  constructor(private localStorageService:LocalStorageService,
              private harcService:HarcService) { }

  ngOnInit(): void { 
    this.getUser();
  }

  
  getUser(){
    this.ogrenciDetayDto = this.localStorageService.get('user')[0];
      this.harcService.getByOgrenciId(this.ogrenciDetayDto.id).subscribe(response=>{
        this.harcs = response.data
      })
      console.log
  }
}
