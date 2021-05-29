import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IdareciDetayDto } from 'src/app/models/detayModels/idareciDetayDto';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-idareci-mail-olustur',
  templateUrl: './idareci-mail-olustur.component.html',
  styleUrls: ['./idareci-mail-olustur.component.css']
})
export class IdareciMailOLusturComponent implements OnInit {
  idareciDetayDto:IdareciDetayDto
  addForm:FormGroup
  constructor(private mailService:MailService,
              private localStorageService:LocalStorageService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createAddForm()
  }

  createAddForm(){
    this.idareciDetayDto = this.localStorageService.get('user')[0]
    this.addForm = this.formBuilder.group({
      mailBaslik: ["",Validators.required],
      mailText:["",Validators.required],
      gonderenMail: this.idareciDetayDto.eMail,
      aliciMail:["",Validators.required],
    })
  }

  add(){
    let mailModel = Object.assign({},this.addForm.value)
    this.mailService.add(mailModel).subscribe(Response=>{
      this.toastrService.success("Mail gönderildi")
    })
  }
}
