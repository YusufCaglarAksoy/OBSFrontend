import { Component, OnInit } from '@angular/core';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { AkademisyenService } from 'src/app/services/akademisyen.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-akademisyen-genel-bilgiler',
  templateUrl: './akademisyen-genel-bilgiler.component.html',
  styleUrls: ['./akademisyen-genel-bilgiler.component.css']
})
export class AkademisyenGenelBilgilerComponent implements OnInit {
  akademisyenDetayDto:AkademisyenDetayDto
  constructor(private localStorageService:LocalStorageService,
    private akademisyenService:AkademisyenService) { }

  ngOnInit(): void {
    this.getBilgiler()
  }
   getBilgiler(){
     this.akademisyenDetayDto = this.localStorageService.get('user')[0]
   }
   
}
