import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { OgrenciService } from 'src/app/services/ogrenci.service';

@Component({
  selector: 'app-ogrenci-giris',
  templateUrl: './ogrenci-giris.component.html',
  styleUrls: ['./ogrenci-giris.component.css']
})
export class OgrenciGirisComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder,
     private ogrenciService:OgrenciService, 
     private toastrService:ToastrService,
     private router:Router,
     private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  loginForm: FormGroup;
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

      this.ogrenciService.login(loginModel).subscribe(response=>{
        this.toastrService.success("Giriş Başarılı")
        localStorage.setItem("token",response.data.token)
        this.router.navigate(["/ogrenci/anasayfa"])
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
