import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Bolum } from 'src/app/models/bolum';
import { BolumDetayDto } from 'src/app/models/detayModels/bolumDetayDto';
import { BolumService } from 'src/app/services/bolum.service';

@Component({
  selector: 'app-idareci-bolum-listesi',
  templateUrl: './idareci-bolum-listesi.component.html',
  styleUrls: ['./idareci-bolum-listesi.component.css']
})
export class IdareciBolumListesiComponent implements OnInit {
  bolumler: BolumDetayDto[] = [];
  bolumId:number;
  bolum:Bolum;
  updateForm:FormGroup;

  constructor(private bolumService: BolumService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

ngOnInit(): void {
this.getall();
this.createUpdateForm();
}

currentBolum(bolumId:number){
this.bolumId=bolumId;
console.log(bolumId);
}

setCurrentBolum(bolum:Bolum){
this.bolum=bolum;
}

createUpdateForm(){
this.updateForm=this.formBuilder.group({
bolumId:["" ,Validators.required],
donemAdi:["" ,Validators.required],
dersKodu:["" ,Validators.required],
dersAdi:["" ,Validators.required],
sinif:["" ,Validators.required],
bolumAdi:["" ,Validators.required],
fakulteAdi:["" ,Validators.required],
donemId:["" ,Validators.required]
})
}

delete(){
this.bolumService.delete(this.bolumId).subscribe(response=>{
this.toastrService.error("Bolum silindi");
})
}

update(){
if (this.updateForm.valid) {
let updateModel=Object.assign({},this.updateForm.value)
this.bolumService.update(updateModel).subscribe(response=>{
this.toastrService.info("Bölüm güncellendi");
})
}
}
  getall() {
    this.bolumService.getDetails().subscribe(response => {
      this.bolumler = response.data
    })
  }
}