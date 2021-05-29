import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IdareciDetayDto } from 'src/app/models/detayModels/idareciDetayDto';
import { Mail } from 'src/app/models/mail';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-idareci-gonderilen-mailler',
  templateUrl: './idareci-gonderilen-mailler.component.html',
  styleUrls: ['./idareci-gonderilen-mailler.component.css']
})
export class IdareciGonderilenMaillerComponent implements OnInit {
  mails:Mail[]
  idareciDetayDto:IdareciDetayDto
  currentId: number;

  constructor(
    private localStorageService:LocalStorageService,
    private mailService:MailService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.idareciDetayDto=this.localStorageService.get('user')[0]
    this.mailService.getByGonderenMail(this.idareciDetayDto.eMail).subscribe(resoponse =>{
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