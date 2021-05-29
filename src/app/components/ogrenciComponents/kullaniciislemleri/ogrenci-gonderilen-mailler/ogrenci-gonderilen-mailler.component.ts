import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { Mail } from 'src/app/models/mail';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-ogrenci-gonderilen-mailler',
  templateUrl: './ogrenci-gonderilen-mailler.component.html',
  styleUrls: ['./ogrenci-gonderilen-mailler.component.css']
})
export class OgrenciGonderilenMaillerComponent implements OnInit {
  mails:Mail[]
  ogrenciDetayDto:OgrenciDetayDto
  currentId: number;

  constructor(
    private localStorageService:LocalStorageService,
    private mailService:MailService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.ogrenciDetayDto=this.localStorageService.get('user')[0]
    this.mailService.getByGonderenMail(this.ogrenciDetayDto.eMail).subscribe(resoponse =>{
    this.mails=resoponse.data
    
    })
  }
  mailId(id:number){
    this.currentId=id
  }
  delete() {
    this.mailService.delete(this.currentId).subscribe(response=>{
    this.toastrService.success("mail silindi")
    })
  }
}