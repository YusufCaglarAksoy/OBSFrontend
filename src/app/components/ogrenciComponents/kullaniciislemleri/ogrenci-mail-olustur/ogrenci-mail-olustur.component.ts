import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-ogrenci-mail-olustur',
  templateUrl: './ogrenci-mail-olustur.component.html',
  styleUrls: ['./ogrenci-mail-olustur.component.css']
})
export class OgrenciMailOlusturComponent implements OnInit {
  ogrenciDetayDto:OgrenciDetayDto
  addForm:FormGroup
  constructor(private mailService:MailService,
              private localStorageService:LocalStorageService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createAddForm()
  }

  createAddForm(){
    this.ogrenciDetayDto = this.localStorageService.get('user')[0]
    this.addForm = this.formBuilder.group({
      mailBaslik: ["",Validators.required],
      mailText:["",Validators.required],
      gonderenMail: this.ogrenciDetayDto.eMail,
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
