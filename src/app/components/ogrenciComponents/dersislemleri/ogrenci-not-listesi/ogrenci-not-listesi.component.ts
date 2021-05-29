import { Component, OnInit } from '@angular/core';
import { NotDetayDto } from 'src/app/models/detayModels/notDetayDto';
import { NotService } from 'src/app/services/not.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { SinavDetayDto } from 'src/app/models/detayModels/sinavDetayDto';

@Component({
  selector: 'app-not-listesi',
  templateUrl: './ogrenci-not-listesi.component.html',
  styleUrls: ['./ogrenci-not-listesi.component.css']
})
export class OgrenciNotListesiComponent implements OnInit {
  ogrenciDetayDto:OgrenciDetayDto
  notsFull:NotDetayDto[];
  notsVize:NotDetayDto[];
  notsFinal:NotDetayDto[];
  notsButunleme:NotDetayDto[];
  selectedDonem:any;
  donemAdlari:any[]=[];
  constructor(private localStorageService:LocalStorageService,
              private notService:NotService) { }
  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.ogrenciDetayDto = this.localStorageService.get('user')[0];
      this.notService.getByOgrenciId(this.ogrenciDetayDto.id).subscribe(response=>{
        this.notsFull = response.data;
        this.notsFull.forEach(gelen=>{
          this.donemAdlari.push(gelen.donemAdi)
        })
        this.donemAdlari = this.donemAdlari.filter((element, i) => i === this.donemAdlari.indexOf(element));
        console.log(this.donemAdlari)
      })
  }
  listeyiGetir(){
    this.ogrenciDetayDto = this.localStorageService.get('user')[0];
      this.notService.getByOgrenciId(this.ogrenciDetayDto.id).subscribe(response=>{
        this.notsFull = response.data;
      })
    console.log(this.selectedDonem)
    this.notsFull = this.notsFull.filter(n=> n.donemAdi == this.selectedDonem);
    this.notsVize = this.notsFull.filter(n=> n.sinavAdi == 'Vize' );
    this.notsFinal = this.notsFull.filter(n=> n.sinavAdi == 'Final');
    this.notsButunleme = this.notsFull.filter(n=> n.sinavAdi == 'Butunleme');
  }
}
