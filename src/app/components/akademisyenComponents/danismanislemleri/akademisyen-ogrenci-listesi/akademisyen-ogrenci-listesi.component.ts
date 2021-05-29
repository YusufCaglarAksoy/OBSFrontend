import { Component, OnInit } from '@angular/core';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { OgrenciService } from 'src/app/services/ogrenci.service';

@Component({
  selector: 'app-akademisyen-ogrenci-listesi',
  templateUrl: './akademisyen-ogrenci-listesi.component.html',
  styleUrls: ['./akademisyen-ogrenci-listesi.component.css']
})
export class AkademisyenOgrenciListesiComponent implements OnInit {
  akademisyenDetayDto:AkademisyenDetayDto
  ogrenciler:OgrenciDetayDto[]
  constructor(private localStorageService:LocalStorageService,
              private ogrenciService:OgrenciService) { }

  ngOnInit(): void {
    this.getOgrenciler()
  }

  getOgrenciler(){
    this.akademisyenDetayDto = this.localStorageService.get('user')[0]
    this.ogrenciService.getByDanismanId(this.akademisyenDetayDto.id).subscribe(response=>{
      this.ogrenciler = response.data
    })
  }

}
