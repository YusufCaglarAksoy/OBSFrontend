import { Component, OnInit } from '@angular/core';
import { Ders } from 'src/app/models/ders';
import { DersDetayDto } from 'src/app/models/detayModels/dersDetayDto';
import { SubeDetayDto } from 'src/app/models/detayModels/subeDetayDto';
import { DersService } from 'src/app/services/ders.service';
import { SinavService } from 'src/app/services/sinav.service';
import { SubeService } from 'src/app/services/sube.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-akademisyen-sinav-giris',
  templateUrl: './akademisyen-sinav-giris.component.html',
  styleUrls: ['./akademisyen-sinav-giris.component.css']
})
export class AkademisyenSinavGirisComponent implements OnInit {
  dersler : Ders[] = [];
  subeler: SubeDetayDto[] = [];
  selectedSube:any;
  akademisyenDetayDto:AkademisyenDetayDto;
  dersDetayDto:DersDetayDto[] = [];
  selectedSinavTur:number;
  selectedDate:Date;
  adersId:Ders[] =[];
  dersId:number;
  akademisyenId:number;
  addForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService, private localStorageService:LocalStorageService, private subeService:SubeService, private dersService:DersService, private sinavService:SinavService) {}

  ngOnInit(): void {
    this.getSinav(),
    this.getSube()
    }
  getSinav(){
    this.dersService.getall().subscribe(response=>{
      this.dersler = response.data
    })
  }
  getSube(){
    this.akademisyenDetayDto = this.localStorageService.get('user')[0];
    this.akademisyenId = this.akademisyenDetayDto.id;
    this.subeService.getByOgretmenId(this.akademisyenId).subscribe(Response=>{
      this.subeler = Response.data;
    })
  }
   getDers(){
    this.dersService.getall().subscribe(Response=>{
      this.adersId = Response.data.filter(a=> a.dersAdi == this.selectedSube);
      this.dersId = this.adersId[0].id;
      console.log(this.adersId[0].id);
      console.log(this.selectedSinavTur)
    })
  }
  sinavEkleFunction(){
    /* this.dersService.getall().subscribe(Response=>{
      this.adersId = Response.data.filter(a=> a.dersAdi == this.selectedSube);
      this.dersId = this.adersId[0].id;
      console.log(this.adersId[0].id);
    }) */
    var y:number = + this.selectedSinavTur;
    this.addForm = this.formBuilder.group({
      sinavTurId:y,
      sinavTarihi: this.selectedDate,
      dersId: this.dersId,
      akademisyenId:this.akademisyenId,
    })
    let sinavModel = Object.assign({},this.addForm.value)
    console.log(sinavModel)
    this.sinavService.add(sinavModel).subscribe(Response=>{
      this.toastrService.success(Response.message)
    })
  }
}
