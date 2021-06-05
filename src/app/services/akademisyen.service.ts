import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AkademisyenDetayDto } from '../models/detayModels/akademisyenDetayDto';
import { Akademisyen } from '../models/kullaniciModels/akademisyen';
import { AkademisyenForRegisterDto } from '../models/kullaniciModels/RegisterModels/akademisyenForRegisterDto';
import { LoginDto } from '../models/kullaniciModels/RegisterModels/loginDto';
import { TokenModel } from '../models/kullaniciModels/RegisterModels/tokenModel';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AkademisyenService {
  apiUrl = 'https://webapi20210602160905.azurewebsites.net/api/akademisyenler/'
  constructor(private httpClient :HttpClient) { }

  add(akademisyen : AkademisyenForRegisterDto):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",akademisyen)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(akademisyen : AkademisyenForRegisterDto):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",akademisyen)
  }

  login(loginDto : LoginDto):Observable<SingleResponseModel<TokenModel>> {
    this.getBySicilNo(loginDto.loginNo).subscribe(response =>{
      let user = response.data
      localStorage.setItem('user',JSON.stringify(user));
    })
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginDto)
  }

  getall():Observable<ListResponseModel<Akademisyen>> {
    return this.httpClient.get<ListResponseModel<Akademisyen>>(this.apiUrl+"getall")
  }

  getDetails():Observable<ListResponseModel<AkademisyenDetayDto>> {
    return this.httpClient.get<ListResponseModel<AkademisyenDetayDto>>(this.apiUrl+"getakademisyenDetaylari")
  }

  getById(id : number):Observable<ListResponseModel<AkademisyenDetayDto>> {
    return this.httpClient.get<ListResponseModel<AkademisyenDetayDto>>(this.apiUrl+"getbyid?id="+id)
  }

  getBySicilNo(sicilNo : number):Observable<ListResponseModel<AkademisyenDetayDto>> {
    return this.httpClient.get<ListResponseModel<AkademisyenDetayDto>>(this.apiUrl+"getbysicilno?sicilNo="+sicilNo)
  }

  getByBolumId(id : number):Observable<ListResponseModel<AkademisyenDetayDto>> {
    return this.httpClient.get<ListResponseModel<AkademisyenDetayDto>>(this.apiUrl+"getbybolumid?id="+id)
  }

  getByUnvanId(id : number):Observable<ListResponseModel<AkademisyenDetayDto>> {
    return this.httpClient.get<ListResponseModel<AkademisyenDetayDto>>(this.apiUrl+"getbyunvanid?unvanid="+id)
  }
  
  getByEMail(email : string):Observable<ListResponseModel<AkademisyenDetayDto>> {
    return this.httpClient.get<ListResponseModel<AkademisyenDetayDto>>(this.apiUrl+"getbyemail?email="+email)
  }
}