import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DersKayit } from '../models/dersKayit';
import { DersKayitDetayDto } from '../models/detayModels/dersKayitDetayDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DersKayitService {

  constructor(private httpClient :HttpClient) { }

  apiUrl = 'https://localhost:44390/api/derskayitlar/'

  add(dersKayit : DersKayit):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",dersKayit)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(dersKayit : DersKayit):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",dersKayit)
  }

  getall():Observable<ListResponseModel<DersKayitDetayDto>> {
    return this.httpClient.get<ListResponseModel<DersKayitDetayDto>>(this.apiUrl+"getall")
  }

  getByOgrenciId(ogrenciId:number):Observable<ListResponseModel<DersKayitDetayDto>> {
    return this.httpClient.get<ListResponseModel<DersKayitDetayDto>>(this.apiUrl+"getbyogrenciId?ogrenciId="+ogrenciId)
  }

  getByDanismanId(danismanId : number):Observable<ListResponseModel<DersKayitDetayDto>> {
    return this.httpClient.get<ListResponseModel<DersKayitDetayDto>>(this.apiUrl+"getbydanismanId?danismanId="+danismanId)
  }

}
