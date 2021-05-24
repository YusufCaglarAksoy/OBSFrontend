import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SinavDetayDto } from '../models/detayModels/sinavDetayDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';
import { Sinav } from '../models/sinav';

@Injectable({
  providedIn: 'root'
})
export class SinavService {
  constructor(private httpClient :HttpClient) { }

  apiUrl = 'https://localhost:44390/api/sinavlar/'

  add(sinav : Sinav):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",sinav)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(sinav : Sinav):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",sinav)
  }

  getall():Observable<ListResponseModel<Sinav>> {
    return this.httpClient.get<ListResponseModel<Sinav>>(this.apiUrl+"getall")
  }

  getDetails():Observable<ListResponseModel<SinavDetayDto>> {
    return this.httpClient.get<ListResponseModel<SinavDetayDto>>(this.apiUrl+"getsinavDetaylari")
  }

  getByAkademisyenId(id:number):Observable<ListResponseModel<SinavDetayDto>> {
    return this.httpClient.get<ListResponseModel<SinavDetayDto>>(this.apiUrl+"getbyakademisyenid?id="+id)
  }

  getById(id : number):Observable<ListResponseModel<SinavDetayDto>> {
    return this.httpClient.get<ListResponseModel<SinavDetayDto>>(this.apiUrl+"getbyid?id="+id)
  }
}
