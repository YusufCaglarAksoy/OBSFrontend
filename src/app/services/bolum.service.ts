import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bolum } from '../models/bolum';
import { BolumDetayDto } from '../models/detayModels/bolumDetayDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BolumService {
  constructor(private httpClient :HttpClient) { }

  apiUrl = 'https://localhost:44390/api/bolumler/'

  add(bolum : Bolum):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",bolum)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(bolum : Bolum):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",bolum)
  }

  getall():Observable<ListResponseModel<Bolum>> {
    return this.httpClient.get<ListResponseModel<Bolum>>(this.apiUrl+"getall")
  }

  getDetails():Observable<ListResponseModel<BolumDetayDto>> {
    return this.httpClient.get<ListResponseModel<BolumDetayDto>>(this.apiUrl+"getbolumDetaylari")
  }

  getById(id : number):Observable<ListResponseModel<BolumDetayDto>> {
    return this.httpClient.get<ListResponseModel<BolumDetayDto>>(this.apiUrl+"getbyid?id="+id)
  }

  getByFakulteId(id :number):Observable<ListResponseModel<BolumDetayDto>> {
    return this.httpClient.get<ListResponseModel<BolumDetayDto>>(this.apiUrl+"getbyfakulteid?id="+id)
  }
}
