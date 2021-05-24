import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AkademisyenService } from 'src/app/services/akademisyen.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-akademisyen-giris',
  templateUrl: './akademisyen-giris.component.html',
  styleUrls: ['./akademisyen-giris.component.css']
})
export class AkademisyenGirisComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder,
     private akademisyenService:AkademisyenService, 
     private toastrService:ToastrService,
     private router:Router,
     private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      loginNo: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.akademisyenService.login(loginModel).subscribe(response=>{
        this.toastrService.info("Giriş Başarılı")
        localStorage.setItem("token",response.data.token)
        this.router.navigate([""])
      },responseError=>{
        this.toastrService.error('Hata','Kullanıcı Adı veya Şifre Geçersiz')
        return responseError.success
      })
    }
  }

  logout(){
    this.localStorageService.remove("token")
    this.localStorageService.remove("user")
  }

}
