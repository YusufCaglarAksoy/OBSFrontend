import { Component, OnInit } from '@angular/core';
import { IdareciDetayDto } from 'src/app/models/detayModels/idareciDetayDto';
import { IdareciService } from 'src/app/services/idareci.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-idareci-anasayfa',
  templateUrl: './idareci-anasayfa.component.html',
  styleUrls: ['./idareci-anasayfa.component.css']
})
export class IdareciAnasayfaComponent implements OnInit {

  idareci:IdareciDetayDto;

  constructor(private localStorageService:LocalStorageService,
              private idareciService:IdareciService) { }

  ngOnInit(): void { 
    this.getIdareci()
  }

  getIdareci(){
    this.idareci=this.localStorageService.get('user')[0];
  }
}