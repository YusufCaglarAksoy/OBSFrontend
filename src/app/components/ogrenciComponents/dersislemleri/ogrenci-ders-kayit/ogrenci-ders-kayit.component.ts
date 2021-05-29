import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DersDetayDto } from 'src/app/models/detayModels/dersDetayDto';
import { DersKayitDetayDto } from 'src/app/models/detayModels/dersKayitDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { DersKayitService } from 'src/app/services/ders-kayit.service';
import { DersService } from 'src/app/services/ders.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-ogrenci-ders-kayit',
  templateUrl: './ogrenci-ders-kayit.component.html',
  styleUrls: ['./ogrenci-ders-kayit.component.css']
})
export class OgrenciDersKayitComponent implements OnInit {
  ogrenciDetayDto:OgrenciDetayDto
  dersler:DersDetayDto[]
  yil:number
  dersAdlari:any[]
  eklenen1:DersDetayDto
  eklenen2:DersDetayDto
  eklenen3:DersDetayDto
  eklenen4:DersDetayDto
  eklenen5:DersDetayDto
  eklenen6:DersDetayDto
  eklenen7:DersDetayDto
  eklenen8:DersDetayDto
  eklenen9:DersDetayDto
  eklenen10:DersDetayDto
  eklenen11:DersDetayDto

  ders1:number=2010
  ders2:number=2010
  ders3:number=2010
  ders4:number=2010
  ders5:number=2010
  ders6:number=2010
  ders7:number=2010
  ders8:number=2010
  ders9:number=2010
  ders10:number=2010
  eklenenDersler:DersKayitDetayDto[]
  dersKayit:FormGroup
  bosDers:DersDetayDto
  constructor(private toastrService:ToastrService,
              private formBuilder:FormBuilder,
              private localStorageService:LocalStorageService,
              private dersService:DersService,
              private dersKayitService:DersKayitService) { }

  ngOnInit(): void {
    this.getDersler()
  }

  getEklenen1(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen1 = response.data[0]
    })
  }

  getEklenen2(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen2 = response.data[0]
    })
  }
  getEklenen3(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen3 = response.data[0]
    })
  }
  getEklenen4(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen4 = response.data[0]
    })
  }
  getEklenen5(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen5 = response.data[0]
    })
  }
  getEklenen6(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen6 = response.data[0]
    })
  }
  getEklenen7(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen7 = response.data[0]
    })
  }
  getEklene8(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen8 = response.data[0]
    })
  }
  getEklenen9(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen9 = response.data[0]
    })
  }
  getEklenen10(ders:DersDetayDto){
    this.dersService.getById(ders.id).subscribe(response=>{
      this.eklenen10 = response.data[0]
    })
  }
  
  getDersler(){
    this.ogrenciDetayDto = this.localStorageService.get('user')[0]
    this.dersService.getByBolumId(this.ogrenciDetayDto.bolumId).subscribe(response=>{
      this.dersler = response.data
      this.dersler = this.dersler.filter(f=>f.donemId===1);
    })
    this.dersService.getById(2010).subscribe(response=>{
      this.eklenen1=response.data[0]
      this.eklenen2=response.data[0]
      this.eklenen3=response.data[0]
      this.eklenen4=response.data[0]
      this.eklenen5=response.data[0]
      this.eklenen6=response.data[0]
      this.eklenen7=response.data[0]
      this.eklenen8=response.data[0]
      this.eklenen9=response.data[0]
      this.eklenen10=response.data[0]

    })
    console.log(this.eklenen1.dersKodu)
  }

  add(){
    var d1:number = + this.ders1;
    var d2:number = + this.ders2;
    var d3:number = + this.ders3;
    var d4:number = + this.ders4;
    var d5:number = + this.ders5;
    var d6:number = + this.ders6;
    var d7:number = + this.ders7;
    var d8:number = + this.ders8;
    var d9:number = + this.ders9;
    var d10:number = + this.ders10;
    this.ogrenciDetayDto = this.localStorageService.get('user')[0]
    this.dersKayit = this.formBuilder.group({
      ogrenciId:this.ogrenciDetayDto.id,
      danismanId:this.ogrenciDetayDto.danismanId,
      onayDurumu:false,
      dersId1:d1,
      dersId2:d2,
      dersId3:d3,
      dersId4:d4,
      dersId5:d5,
      dersId6:d6,
      dersId7:d7,
      dersId8:d8,
      dersId9:d9,
      dersId10:d10,
    })
    console.log(this.dersKayit.value)
    let dersKayitModel = Object.assign({},this.dersKayit.value)
    this.dersKayitService.add(dersKayitModel).subscribe(Response=>{
      this.toastrService.info("Ders Kaydınız Danışman Hocaya İletildi")
    })
  }
}
