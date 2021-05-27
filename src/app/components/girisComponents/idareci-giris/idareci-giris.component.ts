import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IdareciService } from 'src/app/services/idareci.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-idareci-giris',
  templateUrl: './idareci-giris.component.html',
  styleUrls: ['./idareci-giris.component.css']
})
export class IdareciGirisComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder,
     private idareciService:IdareciService, 
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

      this.idareciService.login(loginModel).subscribe(response=>{
        this.toastrService.success("Giriş Başarılı")
        localStorage.setItem("token",response.data.token)
        this.router.navigate(["/idareci/anasayfa"])
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
