import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdareciDetayDto } from '../models/detayModels/idareciDetayDto';
import { Idareci } from '../models/kullaniciModels/idareci';
import { IdareciForRegisterDto } from '../models/kullaniciModels/RegisterModels/idareciForRegisterDto';
import { LoginDto } from '../models/kullaniciModels/RegisterModels/loginDto';
import { TokenModel } from '../models/kullaniciModels/RegisterModels/tokenModel';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class IdareciService {
  apiUrl = 'https://localhost:44390/api/idareciler/'
  constructor(private httpClient:HttpClient) { }

  add(idareci:IdareciForRegisterDto):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",idareci);
  }

  update(idareci:IdareciForRegisterDto):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",idareci);
  }

  delete(id:number):Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id);
  }
  getAll():Observable<ListResponseModel<Idareci>>{
    return this.httpClient.get<ListResponseModel<Idareci>>(this.apiUrl+"getall");
  }
  login(loginDto:LoginDto):Observable<SingleResponseModel<TokenModel>>{
    this.getBySicilNo(loginDto.loginNo).subscribe(response =>{
      let user = response.data
      localStorage.setItem('user',JSON.stringify(user));
    })
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginDto);
  }
  getById(sicilNo:number):Observable<ListResponseModel<IdareciDetayDto>>{
    return this.httpClient.get<ListResponseModel<IdareciDetayDto>>(this.apiUrl+"GetById?id="+sicilNo);
  }
  getBySicilNo(id:number):Observable<ListResponseModel<IdareciDetayDto>>{
    return this.httpClient.get<ListResponseModel<IdareciDetayDto>>(this.apiUrl+"getbysicilno?sicilNo="+id);
  }
  getByEmail(email:number):Observable<ListResponseModel<IdareciDetayDto>>{
    return this.httpClient.get<ListResponseModel<IdareciDetayDto>>(this.apiUrl+"getbyemail?email="+email);
  }
  getByUnvanId(unvanId:number):Observable<ListResponseModel<IdareciDetayDto>>{
    return this.httpClient.get<ListResponseModel<IdareciDetayDto>>(this.apiUrl+"getbyunvanid?unvanid="+unvanId);
  }
  getIdareciDetaylari():Observable<ListResponseModel<IdareciDetayDto>>{
    return this.httpClient.get<ListResponseModel<IdareciDetayDto>>(this.apiUrl+"getIdareciDetaylari");
  }
}
