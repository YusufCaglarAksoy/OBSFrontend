import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { Mail } from 'src/app/models/mail';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-akademisyen-gonderilen-mailler',
  templateUrl: './akademisyen-gonderilen-mailler.component.html',
  styleUrls: ['./akademisyen-gonderilen-mailler.component.css']
})
export class AkademisyenGonderilenMaillerComponent implements OnInit {
  mails:Mail[]
  akademisyenDetayDto:AkademisyenDetayDto
  currentId: number;

  constructor(
    private localStorageService:LocalStorageService,
    private mailService:MailService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.akademisyenDetayDto=this.localStorageService.get('user')[0]
    this.mailService.getByGonderenMail(this.akademisyenDetayDto.eMail).subscribe(resoponse =>{
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