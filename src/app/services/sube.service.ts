import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubeDetayDto } from '../models/detayModels/subeDetayDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';
import { Sube } from '../models/sube';

@Injectable({
  providedIn: 'root'
})
export class SubeService {

  constructor(private httpClient :HttpClient) { }

  apiUrl = 'https://localhost:44390/api/subeler/'

  add(sube : Sube):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",sube)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(sube : Sube):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",sube)
  }

  getall():Observable<ListResponseModel<Sube>> {
    return this.httpClient.get<ListResponseModel<Sube>>(this.apiUrl+"getall")
  }

  getDetails():Observable<ListResponseModel<SubeDetayDto>> {
    return this.httpClient.get<ListResponseModel<SubeDetayDto>>(this.apiUrl+"getsubeDetaylari")
  }

  getById(id : number):Observable<ListResponseModel<SubeDetayDto>> {
    return this.httpClient.get<ListResponseModel<SubeDetayDto>>(this.apiUrl+"getbyid?id="+id)
  }

  getByDersId(id :number):Observable<ListResponseModel<SubeDetayDto>> {
    return this.httpClient.get<ListResponseModel<SubeDetayDto>>(this.apiUrl+"getbydersid?dersid="+id)
  }

  getByOgretmenId(id : number):Observable<ListResponseModel<SubeDetayDto>> {
    return this.httpClient.get<ListResponseModel<SubeDetayDto>>(this.apiUrl+"getbyogretmenid?ogretmenid="+id)
  }
  
}
