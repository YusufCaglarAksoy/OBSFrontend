import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-ogrenci-ana-sayfa',
  templateUrl: './ogrenci-ana-sayfa.component.html',
  styleUrls: ['./ogrenci-ana-sayfa.component.css']
})
export class OgrenciAnaSayfaComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit(): void { 
    this.getUser();
  }

  getUser(){
    return this.localStorageService.get('user')[0];
  }
}
