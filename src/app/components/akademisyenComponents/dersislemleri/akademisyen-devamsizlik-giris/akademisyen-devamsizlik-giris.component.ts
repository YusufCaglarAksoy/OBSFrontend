import { Component, OnInit } from '@angular/core';
import { SubeService } from 'src/app/services/sube.service';
import { SubeDetayDto } from 'src/app/models/detayModels/subeDetayDto';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { OgrenciService } from 'src/app/services/ogrenci.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { DersService } from 'src/app/services/ders.service';
import { Ders } from 'src/app/models/ders';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DevamsizlikService } from 'src/app/services/devamsizlik.service';


@Component({
  selector: 'app-akademisyen-devamsizlik-giris',
  templateUrl: './akademisyen-devamsizlik-giris.component.html',
  styleUrls: ['./akademisyen-devamsizlik-giris.component.css']
})
export class AkademisyenDevamsizlikGirisComponent implements OnInit {
  subeler: SubeDetayDto[] = [];
  ogrenciler: OgrenciDetayDto[] = [];
  akademisyenDetayDto: AkademisyenDetayDto;
  selectedOgrenci:OgrenciDetayDto[]=[];
  selectedDersAdi:any;
  selectedSinavTur:any;
  selectedDate:Date;
  adersId:Ders[] =[];
  dersId:number;
  addForm:FormGroup;
  constructor(private devamsizlikService:DevamsizlikService,private toastrService:ToastrService, private formBuilder:FormBuilder, private dersService:DersService, private subeService:SubeService , private ogrenciService:OgrenciService , private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getSube(),
    this.getOgrenci()
  }
  getSube(){
    this.akademisyenDetayDto = this.localStorageService.get('user')[0];
    this.subeService.getByOgretmenId(this.akademisyenDetayDto.id).subscribe(Response=>{
      this.subeler = Response.data
    })
  }
  getOgrenci(){
    this.ogrenciService.getDetails().subscribe(Response=>{
      this.ogrenciler = Response.data
    })
  }
  getDers(){
    this.dersService.getall().subscribe(Response=>{
      this.adersId = Response.data.filter(a=> a.dersAdi == this.selectedDersAdi);
      this.dersId = this.adersId[0].id;
      console.log(this.adersId[0].id);
      console.log(this.dersId)
    })
  }

  devamsizlikKaydet(){
    var y:number = + this.selectedOgrenci;
    this.addForm = this.formBuilder.group({
      ogrenciId:y,
      dersId:this.dersId,
      devamsizlikDurumu:true
    })
    let sinavModel = Object.assign({},this.addForm.value)
    console.log(sinavModel)
    this.devamsizlikService.add(sinavModel).subscribe(Response=>{
        this.toastrService.success(Response.message)
    })
    console.log(this.selectedDersAdi);
    console.log(this.selectedOgrenci);
    console.log(this.selectedDate);
  }

}
