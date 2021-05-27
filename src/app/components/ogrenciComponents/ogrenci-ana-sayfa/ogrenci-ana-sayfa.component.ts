import { Component, OnInit } from '@angular/core';
import { HarcDetayDto } from 'src/app/models/detayModels/harcDetayDto';
import { NotDetayDto } from 'src/app/models/detayModels/notDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { HarcService } from 'src/app/services/harc.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { NotService } from 'src/app/services/not.service';
import { OgrenciService } from 'src/app/services/ogrenci.service';

@Component({
  selector: 'app-ogrenci-ana-sayfa',
  templateUrl: './ogrenci-ana-sayfa.component.html',
  styleUrls: ['./ogrenci-ana-sayfa.component.css']
})
export class OgrenciAnaSayfaComponent implements OnInit {

  ogrenciler:OgrenciDetayDto[]
  constructor(private localStorageService:LocalStorageService,
              private ogrenciService:OgrenciService) { }

  ngOnInit(): void { 
    this.getOgrenciler()
  }

  getOgrenciler(){
    this.ogrenciService.getDetails().subscribe(respon=>{
      this.ogrenciler = respon.data
    })
  }
}
