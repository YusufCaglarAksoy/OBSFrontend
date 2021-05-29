import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { OgrenciFotograf } from 'src/app/models/fotografModels/ogrenciFotograf';
import { Ogrenci } from 'src/app/models/kullaniciModels/ogrenci';
import { OgrenciFotografService } from 'src/app/services/ogrenci-fotograf.service';
import { OgrenciService } from 'src/app/services/ogrenci.service';

@Component({
  selector: 'app-idareci-ogrenci-listesi',
  templateUrl: './idareci-ogrenci-listesi.component.html',
  styleUrls: ['./idareci-ogrenci-listesi.component.css']
})
export class IdareciOgrenciListesiComponent implements OnInit {

  ogrenciler:Ogrenci[] = [];
  ogrenciNo:number;
  ogrenci:Ogrenci;
  updateForm:FormGroup;
  ogrenciDetayDto:OgrenciDetayDto
  fotograf:OgrenciFotograf
  constructor(private ogrenciService: OgrenciService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder,
              private ogrenciFotografService:OgrenciFotografService) { }

  ngOnInit(): void {
    this.getUser();
    this.createUpdateForm();
  }

  currentOgrenci(ogrenciNo:number){
    this.ogrenciNo=ogrenciNo;
    console.log(ogrenciNo);
  }

  setCurrentOgrenci(ogrenci:Ogrenci){
    this.ogrenciService.getById(ogrenci.id).subscribe(Response=>{
      this.ogrenciDetayDto = Response.data[0]
    })
  }

  createUpdateForm(){
    this.updateForm=this.formBuilder.group({
      ogrenciNo:["" ,Validators.required],
      mufredatId:["" ,Validators.required],
      bolumId:["" ,Validators.required],
      aileAdres:["" ,Validators.required],
      aileTelefon:["" ,Validators.required],
      bankaAdi:["" ,Validators.required],
      subeAdi:["" ,Validators.required],
      subeKodu:["" ,Validators.required],
      hesapNumarası:["" ,Validators.required],
      İBAN:["" ,Validators.required],
      hesapSahibininAdiSoyadi:["" ,Validators.required],
      danismanId:["" ,Validators.required],
      id:["" ,Validators.required],
      isim:["" ,Validators.required],
      soyad:["" ,Validators.required],
      eMail:["" ,Validators.required],
      adres:["" ,Validators.required],
      kayitTarihi:["" ,Validators.required],
      telefonNumarasi:["" ,Validators.required],
      sifre:["" ,Validators.required],
      unvanId:["" ,Validators.required],
    })
  }

  delete(){
    this.ogrenciService.delete(this.ogrenciDetayDto.ogrenciNo).subscribe(response=>{
      this.toastrService.error("Öğrenci silindi");
    })
  }

  update(){
    if (this.updateForm.valid) {
      let updateModel=Object.assign({},this.updateForm.value)
      this.ogrenciService.update(updateModel).subscribe(response=>{
        this.toastrService.info("Öğrenci güncellendi");
      })
    }
  }
  getUser() {
    this.ogrenciService.getall().subscribe(response => {
      this.ogrenciler = response.data
    })
    this.ogrenciService.getDetails().subscribe(Response=>{
      this.ogrenciDetayDto =Response.data[0]
    })
  }
}