import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MufredatDetayDto } from '../models/detayModels/mufredatDetayDto';
import { Mufredat } from '../models/mufredat';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MufredatService {
  apiUrl = 'https://localhost:44390/api/siniflisteler/'
  constructor(private httpClient:HttpClient) { }

  add(mufredat:Mufredat):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",mufredat);
  }

  update(mufredat:Mufredat):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",mufredat);
  }

  delete(id:number):Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id);
  }

  getById(id:number):Observable<ListResponseModel<MufredatDetayDto>>{
    return this.httpClient.get<ListResponseModel<MufredatDetayDto>>(this.apiUrl+"getbyid?id="+id);
  }

  getAll():Observable<ListResponseModel<Mufredat>>{
    return this.httpClient.get<ListResponseModel<Mufredat>>(this.apiUrl+"getall");
  }

  getMufredatDetaylari():Observable<ListResponseModel<MufredatDetayDto>>{
    return this.httpClient.get<ListResponseModel<MufredatDetayDto>>(this.apiUrl+"getmufredatDetaylari");
  }
}
