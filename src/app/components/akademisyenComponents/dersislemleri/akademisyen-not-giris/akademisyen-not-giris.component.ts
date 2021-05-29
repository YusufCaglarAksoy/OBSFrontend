import { Component, OnInit } from '@angular/core';
import { SubeService } from 'src/app/services/sube.service';
import { SubeDetayDto } from 'src/app/models/detayModels/subeDetayDto';
import { SinavDetayDto } from 'src/app/models/detayModels/sinavDetayDto';
import { SinavService } from 'src/app/services/sinav.service';
import { NotService } from 'src/app/services/not.service';
import { NotDetayDto } from 'src/app/models/detayModels/notDetayDto';
import { NoopAnimationPlayer } from '@angular/animations';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-akademisyen-not-giris',
  templateUrl: './akademisyen-not-giris.component.html',
  styleUrls: ['./akademisyen-not-giris.component.css']
})
export class AkademisyenNotGirisComponent implements OnInit {
  subeler: SubeDetayDto[] = [];
  sinavlar : SinavDetayDto[] =[];
  notlar : NotDetayDto[] = [];
  sinavlarGelen : SinavDetayDto[] = [];
  akademisyenDetayDto: AkademisyenDetayDto;
  selectedValue: null;
  selectedValue2: null;
  selectedValueGelenNot: null;
  sinavAdiGelen:string = '';
  dersAdiGelen:string = '';
  simpleArray2:any[] = [];
  simpleArray3:any[] = [];
  constructor( private toastrService:ToastrService, private subeService:SubeService , private sinavService:SinavService, private localStorageService:LocalStorageService, private notService:NotService) { }

  ngOnInit(): void {
    this.getSinav()
  }
  getSinav(){
    this.akademisyenDetayDto = this.localStorageService.get('user')[0];
    this.sinavService.getByAkademisyenId(this.akademisyenDetayDto.id).subscribe(Response=>{
      this.sinavlar = Response.data;
      this.sinavlar.forEach(gelen => {
        this.simpleArray2.push(gelen.dersAdi);
        this.simpleArray3.push(gelen.sinavAdi);
    });
      this.simpleArray2 = this.simpleArray2.filter((element, i) => i === this.simpleArray2.indexOf(element));
      this.simpleArray3 = this.simpleArray3.filter((element, i) => i === this.simpleArray3.indexOf(element));
      //console.log(this.simpleArray2)
      //console.log(this.simpleArray3)
    });
  }

  getByList(){
      this.notService.getDetails().subscribe(Response=>{
        this.notlar = Response.data.filter(n=> n.dersAdi == this.selectedValue && n.sinavAdi == this.selectedValue2)
      })
      //console.log(this.selectedValue);
  }
  notlariYukle(){
    console.log("Yükleme Başarılı")
  }
  notDegis(gelenNot:NotDetayDto){
    //console.log(gelenNot.id);
     this.notService.update(
       {id:gelenNot.id,
        sinavId:gelenNot.sinavId,
        ogrenciId:gelenNot.ogrenciId,
        sinavNot:gelenNot.sinavNot
    }).subscribe(Response=>{
      this.toastrService.success(Response.message);
    });
  }
}
