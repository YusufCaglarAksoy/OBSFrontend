import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-ogrenci-danisman-bilgileri',
  templateUrl: './ogrenci-danisman-bilgileri.component.html',
  styleUrls: ['./ogrenci-danisman-bilgileri.component.css']
})
export class OgrenciDanismanBilgileriComponent implements OnInit {
  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    return this.localStorageService.get('user')[0];
  }


}
