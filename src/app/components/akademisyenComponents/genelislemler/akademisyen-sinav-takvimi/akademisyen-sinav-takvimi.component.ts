import { Component, OnInit } from '@angular/core';
import { SinavDetayDto } from 'src/app/models/detayModels/sinavDetayDto';
import { SinavService } from 'src/app/services/sinav.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';

@Component({
  selector: 'app-akademisyen-sinav-takvimi',
  templateUrl: './akademisyen-sinav-takvimi.component.html',
  styleUrls: ['./akademisyen-sinav-takvimi.component.css']
})
export class AkademisyenSinavTakvimiComponent implements OnInit {
  sinavlar : SinavDetayDto[] =[];
  akademisyenDetayDto: AkademisyenDetayDto;

  constructor(private sinavService:SinavService, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getSinav()
  }
  getSinav(){
    this.akademisyenDetayDto = this.localStorageService.get('user')[0];
    this.sinavService.getByAkademisyenId(this.akademisyenDetayDto.id).subscribe(response=>{
      this.sinavlar = response.data
    })
  }
}
