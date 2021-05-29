import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-akademisyen-mail-olustur',
  templateUrl: './akademisyen-mail-olustur.component.html',
  styleUrls: ['./akademisyen-mail-olustur.component.css']
})
export class AkademisyenMailOlusturComponent implements OnInit {

  akademisyenDetayDto:AkademisyenDetayDto
  addForm:FormGroup
  constructor(private mailService:MailService,
              private localStorageService:LocalStorageService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createAddForm()
  }

  createAddForm(){
    this.akademisyenDetayDto = this.localStorageService.get('user')[0]
    this.addForm = this.formBuilder.group({
      mailBaslik: ["",Validators.required],
      mailText:["",Validators.required],
      gonderenMail: this.akademisyenDetayDto.eMail,
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
