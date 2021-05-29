import { Component, OnInit } from '@angular/core';
import { DersDetayDto } from 'src/app/models/detayModels/dersDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { DersService } from 'src/app/services/ders.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-ogrenci-bolum-dersleri',
  templateUrl: './ogrenci-bolum-dersleri.component.html',
  styleUrls: ['./ogrenci-bolum-dersleri.component.css']
})
export class OgrenciBolumDersleriComponent implements OnInit {
  dersler:DersDetayDto[]
  ogrenciDetayDto:OgrenciDetayDto
  constructor(private localStorageService:LocalStorageService,
              private dersService:DersService) { }

  ngOnInit(): void {
    this.getDersler()
  }

  getDersler(){
    this.ogrenciDetayDto = this.localStorageService.get('user')[0]
    this.dersService.getByBolumId(this.ogrenciDetayDto.bolumId).subscribe(response=>{
      this.dersler = response.data
    })
  }
}
