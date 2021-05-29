import { Component, OnInit } from '@angular/core';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { SinifListeDetayDto } from 'src/app/models/detayModels/sinifListeDetayDto';
import { SubeDetayDto } from 'src/app/models/detayModels/subeDetayDto';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { OgrenciService } from 'src/app/services/ogrenci.service';
import { SinifListeService } from 'src/app/services/sinif-liste.service';
import { SubeService } from 'src/app/services/sube.service';

@Component({
  selector: 'app-akademisyen-sinif-liste',
  templateUrl: './akademisyen-sinif-liste.component.html',
  styleUrls: ['./akademisyen-sinif-liste.component.css']
})
export class AkademisyenSinifListeComponent implements OnInit {
subeler:SubeDetayDto[]
akademisyenDetayDto:AkademisyenDetayDto
ogrenciler:OgrenciDetayDto[]
simpleArray2:any[] = [];
sinifListeler:SinifListeDetayDto[]
selectedValue: null;

  constructor(private localStorageService:LocalStorageService,
  private subeService:SubeService,
  private ogrenciService:OgrenciService,
  private sinifListeService:SinifListeService) { }

  ngOnInit(): void {
    this.getSubeler()
  }

 getSubeler(){
  this.akademisyenDetayDto = this.localStorageService.get('user')[0]
  this.subeService.getByOgretmenId(this.akademisyenDetayDto.id).subscribe(respons=>{
    this.subeler =respons.data
  })

}
getOgrenciler(){
  this.akademisyenDetayDto  = this.localStorageService.get('user')[0]
  this.sinifListeService.getBySubeId(this.selectedValue).subscribe(Response=>{
    this.sinifListeler = Response.data
  })
  
  }
}
