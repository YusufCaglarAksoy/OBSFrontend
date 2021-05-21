import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HarcDetayDto } from '../models/detayModels/harcDetayDto';
import { Harc } from '../models/harc';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class HarcService {

  constructor(private httpClient :HttpClient) { }

  apiUrl = 'https://localhost:44390/api/harclar/'

  add(harc : Harc):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",harc)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(harc : Harc):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",harc)
  }

  getall():Observable<ListResponseModel<Harc>> {
    return this.httpClient.get<ListResponseModel<Harc>>(this.apiUrl+"getall")
  }

  getDetails():Observable<ListResponseModel<HarcDetayDto>> {
    return this.httpClient.get<ListResponseModel<HarcDetayDto>>(this.apiUrl+"getharcDetaylari")
  }

  getById(id : number):Observable<ListResponseModel<HarcDetayDto>> {
    return this.httpClient.get<ListResponseModel<HarcDetayDto>>(this.apiUrl+"getbyid?id="+id)
  }

  getByOgrenciId(id :number):Observable<ListResponseModel<HarcDetayDto>> {
    return this.httpClient.get<ListResponseModel<HarcDetayDto>>(this.apiUrl+"getbyogrenciid?id="+id)
  }
} 
