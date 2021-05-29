import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ders } from '../models/ders';
import { DersDetayDto } from '../models/detayModels/dersDetayDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DersService {
  constructor(private httpClient :HttpClient) { }

  apiUrl = 'https://localhost:44390/api/dersler/'

  add(ders : Ders):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",ders)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(ders : Ders):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",ders)
  }

  getall():Observable<ListResponseModel<Ders>> {
    return this.httpClient.get<ListResponseModel<Ders>>(this.apiUrl+"getall")
  }

  getDetails():Observable<ListResponseModel<DersDetayDto>> {
    return this.httpClient.get<ListResponseModel<DersDetayDto>>(this.apiUrl+"getdersDetaylari")
  }

  getById(id : number):Observable<ListResponseModel<DersDetayDto>> {
    return this.httpClient.get<ListResponseModel<DersDetayDto>>(this.apiUrl+"getbyid?id="+id)
  }

  getByDersKodu(derskodu :String):Observable<ListResponseModel<DersDetayDto>> {
    return this.httpClient.get<ListResponseModel<DersDetayDto>>(this.apiUrl+"getbyderskodu?dersKodu="+derskodu)
  }

  getByDonemId(id : number):Observable<ListResponseModel<DersDetayDto>> {
    return this.httpClient.get<ListResponseModel<DersDetayDto>>(this.apiUrl+"getbydonemid?donemid="+id)
  }

  getByBolumId(id : number):Observable<ListResponseModel<DersDetayDto>> {
    return this.httpClient.get<ListResponseModel<DersDetayDto>>(this.apiUrl+"getbybolumid?bolumid="+id)
  }
  getBySinif(sinif : number):Observable<ListResponseModel<DersDetayDto>> {
    return this.httpClient.get<ListResponseModel<DersDetayDto>>(this.apiUrl+"getbysinif?sinif="+sinif)
  }
}
