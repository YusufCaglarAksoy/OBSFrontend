import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OgrenciDetayDto } from '../models/detayModels/ogrenciDetayDto';
import { Ogrenci } from '../models/kullaniciModels/ogrenci';
import { LoginDto } from '../models/kullaniciModels/RegisterModels/loginDto';
import { OgrenciForRegisterDto } from '../models/kullaniciModels/RegisterModels/ogrenciForRegisterDto';
import { TokenModel } from '../models/kullaniciModels/RegisterModels/tokenModel';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OgrenciService {
  apiUrl = 'https://localhost:44390/api/ogrenciler/'
  constructor(private httpClient :HttpClient) { }

  add(ogrenci : OgrenciForRegisterDto):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",ogrenci)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(ogrenci : OgrenciForRegisterDto):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",ogrenci)
  }

  login(loginDto : LoginDto):Observable<SingleResponseModel<TokenModel>> {
    this.getByOgrenciNo(loginDto.loginNo).subscribe(response =>{
      let user = response.data
      localStorage.setItem('user',JSON.stringify(user));
    })
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginDto)
  }

  getall():Observable<ListResponseModel<Ogrenci>> {
    return this.httpClient.get<ListResponseModel<Ogrenci>>(this.apiUrl+"getall")
  }

  getDetails():Observable<ListResponseModel<OgrenciDetayDto>> {
    return this.httpClient.get<ListResponseModel<OgrenciDetayDto>>(this.apiUrl+"getogrenciDetaylari")
  }

  getById(id : number):Observable<ListResponseModel<OgrenciDetayDto>> {
    return this.httpClient.get<ListResponseModel<OgrenciDetayDto>>(this.apiUrl+"getbyid?id="+id)
  }

  getByOgrenciNo(ogrenciNo : number):Observable<ListResponseModel<OgrenciDetayDto>> {
    return this.httpClient.get<ListResponseModel<OgrenciDetayDto>>(this.apiUrl+"getbyogrencino?ogrenciNo="+ogrenciNo)
  }

  getByBolumId(id : number):Observable<ListResponseModel<OgrenciDetayDto>> {
    return this.httpClient.get<ListResponseModel<OgrenciDetayDto>>(this.apiUrl+"getbybolumid?id="+id)
  }

  getByDanismanId(id : number):Observable<ListResponseModel<OgrenciDetayDto>> {
    return this.httpClient.get<ListResponseModel<OgrenciDetayDto>>(this.apiUrl+"getbydanismanid?id="+id)
  }
  
  getByEMail(email : string):Observable<ListResponseModel<OgrenciDetayDto>> {
    return this.httpClient.get<ListResponseModel<OgrenciDetayDto>>(this.apiUrl+"getbyemail?email="+email)
  }
}
