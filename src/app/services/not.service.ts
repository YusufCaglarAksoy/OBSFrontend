import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotDetayDto } from '../models/detayModels/notDetayDto';
import { Not } from '../models/not';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class NotService {

  constructor(private httpClient :HttpClient) { }

  apiUrl = 'https://localhost:44390/api/harclar/'

  add(not : Not):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",not)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(not : Not):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",not)
  }

  getall():Observable<ListResponseModel<Not>> {
    return this.httpClient.get<ListResponseModel<Not>>(this.apiUrl+"getall")
  }

  getDetails():Observable<ListResponseModel<NotDetayDto>> {
    return this.httpClient.get<ListResponseModel<NotDetayDto>>(this.apiUrl+"getnotDetaylari")
  }

  getById(id : number):Observable<ListResponseModel<NotDetayDto>> {
    return this.httpClient.get<ListResponseModel<NotDetayDto>>(this.apiUrl+"getbyid?id="+id)
  }

  getByOgrenciId(ogrenciId :number):Observable<ListResponseModel<NotDetayDto>> {
    return this.httpClient.get<ListResponseModel<NotDetayDto>>(this.apiUrl+"getbyogrenciid?id="+ogrenciId)
  }

  getBySınavId(sinavId :number):Observable<ListResponseModel<NotDetayDto>> {
    return this.httpClient.get<ListResponseModel<NotDetayDto>>(this.apiUrl+"getbysinavid?id="+sinavId)
  }
}