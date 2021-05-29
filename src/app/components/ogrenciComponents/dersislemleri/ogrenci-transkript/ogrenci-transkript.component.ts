import { Component, OnInit } from '@angular/core';
import { NotDetayDto } from 'src/app/models/detayModels/notDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { NotService } from 'src/app/services/not.service';

@Component({
  selector: 'app-ogrenci-transkript',
  templateUrl: './ogrenci-transkript.component.html',
  styleUrls: ['./ogrenci-transkript.component.css'],
})
export class OgrenciTranskriptComponent implements OnInit {
  ogrenciDetayDto: OgrenciDetayDto;
  notsFull: NotDetayDto[];
  notsVize: NotDetayDto[];
  notsFinal: NotDetayDto[];
  notsButunleme: NotDetayDto[];
  ortalama: number;
  constructor(
    private localStorageService: LocalStorageService,
    private notService: NotService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.ogrenciDetayDto = this.localStorageService.get('user')[0];
    this.notService
      .getByOgrenciId(this.ogrenciDetayDto.id)
      .subscribe((respons) => {
        this.notsFull = respons.data;
        this.notsVize = this.notsFull.filter((n) => n.sinavAdi == 'Vize');
        this.notsFinal = this.notsFull.filter((n) => n.sinavAdi == 'Final');
        this.notsButunleme = this.notsFull.filter(
          (n) => n.sinavAdi == 'Butunleme'
        );
      });
  }

  ortalamaHesapla(notsVize: number, notsButunleme: number) {
    if (notsButunleme < 50) {
      this.ortalama = (notsButunleme + notsVize) / 2;
        return 'FF   ' + this.ortalama;
    } else {
      this.ortalama = (notsButunleme + notsVize) / 2;
      if (this.ortalama > 90) {
        return 'AA   ' + this.ortalama;
      } else if (this.ortalama < 50) {
        return 'FF   ' + this.ortalama;
      } else if (this.ortalama > 70) {
        return 'BB   ' + this.ortalama;
      } else if (this.ortalama >= 50) {
        return 'CC   ' + this.ortalama;
      }
      console.log(this.ortalama,notsVize,notsButunleme)
      
      return 'hata';
    }
  }
}
