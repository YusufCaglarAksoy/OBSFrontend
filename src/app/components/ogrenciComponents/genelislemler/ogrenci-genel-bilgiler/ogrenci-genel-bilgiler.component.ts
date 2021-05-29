import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { OgrenciService } from 'src/app/services/ogrenci.service';

@Component({
  selector: 'app-ogrenci-genel-bilgiler',
  templateUrl: './ogrenci-genel-bilgiler.component.html',
  styleUrls: ['./ogrenci-genel-bilgiler.component.css']
})
export class OgrenciGenelBilgilerComponent implements OnInit {
  id:number;
  unvanId:number;
  sifre:string;
  ogrenciDetayDto:OgrenciDetayDto
  constructor(private formBuilder:FormBuilder,
    private ogrenciService:OgrenciService,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.ogrenciDetayDto =  this.localStorageService.get('user')[0];
    this.id=this.localStorageService.get('user')[0].id;
    this.unvanId=this.localStorageService.get('user')[0].unvanId;
    this.sifre=this.localStorageService.get('user')[0].sifre;
  }

  updateForm:FormGroup;
  crateUpdateForm(){
    this.updateForm = this.formBuilder.group({
      ogrenciNo:this.ogrenciDetayDto.ogrenciNo,
      isim:this.ogrenciDetayDto.isim,
      soyad:this.ogrenciDetayDto.soyad,
      bolumAdi:this.ogrenciDetayDto.bolumAdi,
      unvanAdi:this.ogrenciDetayDto.unvanAdi,
      fakulteAdi:this.ogrenciDetayDto.fakulteAdi,
      adres:this.ogrenciDetayDto.adres,
      kayitTarihi:this.ogrenciDetayDto.kayitTarihi,
      aileTelefon:this.ogrenciDetayDto.aileTelefon,
      aileAdres:this.ogrenciDetayDto.aileAdres,
      danismanAdi:this.ogrenciDetayDto.danismanAdi,
      danismanSoyadi:this.ogrenciDetayDto.danismanSoyadi,
      danismanEMail:this.ogrenciDetayDto.danismanEMail,
      danismanTelefonNumarasi:this.ogrenciDetayDto.danismanTelefonNumarasi,
      danismanUnvanAdi:this.ogrenciDetayDto.danismanUnvanAdi,
      unvanId:this.unvanId,
      sifre:this.sifre,
      id:this.id,
      telefonNo : ["",Validators.required],
      eMail:["",Validators.required],
      bankaAdi:["",Validators.required],
      subeAdi:["",Validators.required],
      subeKodu:["",Validators.required],
      hesapNumarasi:["",Validators.required],
      iBan:["",Validators.required],
      hesapSahibininAdiSoyadi:["",Validators.required]
    })
  }
  update(){
    if(this.updateForm.valid){
      console.log(this.updateForm.value);
      let updateModel = Object.assign({},this.updateForm.value)
      this.ogrenciService.update(updateModel).subscribe(response=>{
        this.toastrService.info("Güncelleme Başarılı")
      },responseError=>{
        this.toastrService.error('Hata','Banka Kısmı Boş kalamaz')
        return responseError.success
      })
    }
  }
}
