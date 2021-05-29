import { Component, OnInit } from '@angular/core';
import { DevamsizlikDetayDto } from 'src/app/models/detayModels/devamsizlikDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { Devamsizlik } from 'src/app/models/devamsizlik';
import { DevamsizlikService } from 'src/app/services/devamsizlik.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-ogrenci-devamsizlik-durumu',
  templateUrl: './ogrenci-devamsizlik-durumu.component.html',
  styleUrls: ['./ogrenci-devamsizlik-durumu.component.css']
})
export class OgrenciDevamsizlikDurumuComponent implements OnInit {
devamsizlikDetayDto:DevamsizlikDetayDto[]
ogrenciDetayDto:OgrenciDetayDto


  
  constructor(private localStorageService:LocalStorageService,
    private devamsizlikService:DevamsizlikService
    ) { }

  ngOnInit(): void {
    this.getDevamsizliklar()
  }
getDevamsizliklar(){
  this.ogrenciDetayDto = this.localStorageService.get('user')[0]
  this.devamsizlikService.getByOgrenciId(this.ogrenciDetayDto.id).subscribe(respons=>{
    this.devamsizlikDetayDto = respons.data
    console.log(this.devamsizlikDetayDto[0].devamsizlikDurumu)
  })
}


}
