import { Component, OnInit } from '@angular/core';
import { HarcDetayDto } from 'src/app/models/detayModels/harcDetayDto';
import { NotDetayDto } from 'src/app/models/detayModels/notDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { HarcService } from 'src/app/services/harc.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { NotService } from 'src/app/services/not.service';

@Component({
  selector: 'app-ogrenci-ana-sayfa',
  templateUrl: './ogrenci-ana-sayfa.component.html',
  styleUrls: ['./ogrenci-ana-sayfa.component.css']
})
export class OgrenciAnaSayfaComponent implements OnInit {

  ogrenciDetayDto:OgrenciDetayDto
  harcs:HarcDetayDto[]
  constructor(private localStorageService:LocalStorageService,
              private harcService:HarcService) { }

  ngOnInit(): void { 
    this.getUser();
  }

  
  getUser(){
    this.ogrenciDetayDto = this.localStorageService.get('user')[0];
      this.harcService.getByOgrenciId(1009).subscribe(response=>{
        this.harcs = response.data
      })
      console.log
  }
}
