import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { DersKayitDetayDto } from 'src/app/models/detayModels/dersKayitDetayDto';
import { DersKayitService } from 'src/app/services/ders-kayit.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-akademisyen-ders-kayit-onaylama',
  templateUrl: './akademisyen-ders-kayit-onaylama.component.html',
  styleUrls: ['./akademisyen-ders-kayit-onaylama.component.css']
})
export class AkademisyenDersKayitOnaylamaComponent implements OnInit {
  akademisyenDetayDto:AkademisyenDetayDto
  dersKayitlari:DersKayitDetayDto[]
  currentKayit:DersKayitDetayDto
  updateForm:FormGroup
  constructor(private dersKayitService:DersKayitService,
              private localStorageService:LocalStorageService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getDersKayit()
  }

  currentDersKayit(dersKayit:DersKayitDetayDto){
    this.currentKayit = dersKayit
  }

  delete(){
    this.dersKayitService.delete(this.currentKayit.id).subscribe(response=>{
      this.toastrService.info("Ders Kaydı Silindi")
    })
  }

  update(){
    this.updateForm = this.formBuilder.group({
      id:this.currentKayit.id,
      ogrenciId:this.currentKayit.ogrenciId,
      danismanId:this.currentKayit.danismanId,
      onayDurumu:true,
      dersId1:this.currentKayit.dersId1,
      dersId2:this.currentKayit.dersId2,
      dersId3:this.currentKayit.dersId3,
      dersId4:this.currentKayit.dersId4,
      dersId5:this.currentKayit.dersId5,
      dersId6:this.currentKayit.dersId6,
      dersId7:this.currentKayit.dersId7,
      dersId8:this.currentKayit.dersId8,
      dersId9:this.currentKayit.dersId9,
      dersId10:this.currentKayit.dersId10,
    })
    let dersKayitModel = Object.assign({},this.updateForm.value)
    this.dersKayitService.update(dersKayitModel).subscribe(reponse=>{
      this.toastrService.success("Ders Kaydı Onaylandı")
    })
  }

  getDersKayit(){
    this.akademisyenDetayDto = this.localStorageService.get('user')[0]
    this.dersKayitService.getByDanismanId(this.akademisyenDetayDto.id).subscribe(Response=>{
      this.currentKayit = Response.data[0]
      this.dersKayitlari = Response.data

    })
  }
}
