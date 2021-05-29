import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Ders } from 'src/app/models/ders';
import { DersDetayDto } from 'src/app/models/detayModels/dersDetayDto';
import { DersService } from 'src/app/services/ders.service';

@Component({
  selector: 'app-idareci-ders-listesi',
  templateUrl: './idareci-ders-listesi.component.html',
  styleUrls: ['./idareci-ders-listesi.component.css']
})
export class IdareciDersListesiComponent implements OnInit {
  dersler: DersDetayDto[] = [];
  dersId:number;
  ders:Ders;
  updateForm:FormGroup;

  constructor(private dersService: DersService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getall();
    this.createUpdateForm();
  }

  currentDers(dersId:number){
    this.dersId=dersId;
    console.log(dersId);
  }

  setCurrentDers(ders:Ders){
    this.ders=ders;
  }

  createUpdateForm(){
    this.updateForm=this.formBuilder.group({
      dersId:["" ,Validators.required],
      donemAdi:["" ,Validators.required],
      dersKodu:["" ,Validators.required],
      dersAdi:["" ,Validators.required],
      sinif:["" ,Validators.required],
      bolumAdi:["" ,Validators.required],
      fakulteAdi:["" ,Validators.required],
      donemId:["" ,Validators.required],
      bolumId:["" ,Validators.required],
    })
  }

  delete(){
    this.dersService.delete(this.dersId).subscribe(response=>{
      this.toastrService.error("Ders silindi");
    })
  }

  update(){
    if (this.updateForm.valid) {
      let updateModel=Object.assign({},this.updateForm.value)
      this.dersService.update(updateModel).subscribe(response=>{
        this.toastrService.info("Ders gÃ¼ncellendi");
      })
    }
  }

  getall() {
    this.dersService.getDetails().subscribe(response => {
      this.dersler = response.data
    })
  }
}