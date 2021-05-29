import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevamsizlikDetayDto } from '../models/detayModels/devamsizlikDetayDto';
import { Devamsizlik } from '../models/devamsizlik';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DevamsizlikService {

  constructor(private httpClient :HttpClient) { }

  apiUrl = 'https://localhost:44390/api/devamsizliklar/'

  add(devamsizlik : Devamsizlik):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",devamsizlik)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(devamsizlik : Devamsizlik):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",devamsizlik)
  }

  getall():Observable<ListResponseModel<Devamsizlik>> {
    return this.httpClient.get<ListResponseModel<Devamsizlik>>(this.apiUrl+"getall")
  }

  getDetails():Observable<ListResponseModel<DevamsizlikDetayDto>> {
    return this.httpClient.get<ListResponseModel<DevamsizlikDetayDto>>(this.apiUrl+"getdevamsizlikDetaylari")
  }

  getById(id : number):Observable<ListResponseModel<DevamsizlikDetayDto>> {
    return this.httpClient.get<ListResponseModel<DevamsizlikDetayDto>>(this.apiUrl+"getbyid?id="+id)
  }

  getByOgrenciId(ogrenciId :number):Observable<ListResponseModel<DevamsizlikDetayDto>> {
    return this.httpClient.get<ListResponseModel<DevamsizlikDetayDto>>(this.apiUrl+"getbyogrenciid?ogrenciid="+ogrenciId)
  }

  getByDersId(dersId :number):Observable<ListResponseModel<DevamsizlikDetayDto>> {
    return this.httpClient.get<ListResponseModel<DevamsizlikDetayDto>>(this.apiUrl+"getbydersid?dersid="+dersId)
  }

  GetByDevamsizlikDurumu(devamsizlikDurumu :boolean):Observable<ListResponseModel<DevamsizlikDetayDto>> {
    return this.httpClient.get<ListResponseModel<DevamsizlikDetayDto>>(this.apiUrl+"getbydevamsizlikdurumu?devamsizlikDurumu="+devamsizlikDurumu)
  }
}