import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { AkademisyenFotograf } from 'src/app/models/fotografModels/akademisyenFotograf';
import { Akademisyen } from 'src/app/models/kullaniciModels/akademisyen';
import { AkademisyenFotografService } from 'src/app/services/akademisyen-fotograf.service';
import { AkademisyenService } from 'src/app/services/akademisyen.service';

@Component({
  selector: 'app-idareci-akademisyen-listesi',
  templateUrl: './idareci-akademisyen-listesi.component.html',
  styleUrls: ['./idareci-akademisyen-listesi.component.css']
})
export class IdareciAkademisyenListesiComponent implements OnInit {
  akademisyenler: AkademisyenDetayDto[]=[];
  sicilNo:number;
  akademisyen:AkademisyenDetayDto;
  updateForm:FormGroup;
  akademisyenDetayDto:AkademisyenDetayDto
  fotograf:AkademisyenFotograf
  constructor(private akademisyenService: AkademisyenService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private akademisyenFotografService:AkademisyenFotografService) { }

  ngOnInit(): void {
  this.getall();
  this.createUpdateForm();
  }

  currentAkademisyen(sicilNo:number){
  this.sicilNo=sicilNo;
  console.log(sicilNo);
  }

  setCurrentAkademisyen(akademisyen:AkademisyenDetayDto){
  this.akademisyenDetayDto=akademisyen;
  }

  createUpdateForm(){
  this.updateForm=this.formBuilder.group({
  sicilNo:["" ,Validators.required],
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
    this.akademisyenFotografService.getByAkademisyenId(this.akademisyenDetayDto.id).subscribe(Response=>{
      this.fotograf = Response.data
    })
  this.akademisyenFotografService.delete(this.fotograf.id).subscribe

  this.akademisyenService.delete(this.akademisyenDetayDto.sicilNo).subscribe(response=>{
    this.toastrService.error("Akademisyen silindi");
  })
  }

  update(){
  if (this.updateForm.valid) {
  let updateModel=Object.assign({},this.updateForm.value)
  this.akademisyenService.update(updateModel).subscribe(response=>{
  this.toastrService.info("Akademisyen güncellendi");
  })
  }
  }
    getall() {
      this.akademisyenService.getDetails().subscribe(response => {
        this.akademisyenler = response.data
        this.akademisyenDetayDto = response.data[0]
      })
    }
  }